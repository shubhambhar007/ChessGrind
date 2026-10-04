import "server-only";

import { Redis } from "@upstash/redis";

type StoredValue = string | number | object;

type MemoryStore = {
  values: Map<string, StoredValue>;
  expirations: Map<string, number>;
};

type StoreGlobals = typeof globalThis & {
  __chessgrindAccountStore?: MemoryStore;
};

function getMemoryStore() {
  const globals = globalThis as StoreGlobals;
  globals.__chessgrindAccountStore ??= {
    values: new Map(),
    expirations: new Map(),
  };
  return globals.__chessgrindAccountStore;
}

function readMemory(key: string) {
  const store = getMemoryStore();
  const expiresAt = store.expirations.get(key);

  if (expiresAt && expiresAt <= Date.now()) {
    store.values.delete(key);
    store.expirations.delete(key);
    return null;
  }

  return store.values.get(key) ?? null;
}

export type ChessGrindStore = {
  kind: "redis" | "memory";
  get<T>(key: string): Promise<T | null>;
  set(
    key: string,
    value: StoredValue,
    options?: { nx?: boolean; ex?: number }
  ): Promise<"OK" | null>;
  del(key: string): Promise<number>;
  incr(key: string): Promise<number>;
  expire(key: string, seconds: number): Promise<number>;
};

export function getStore(): ChessGrindStore | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ??
    process.env.UPSTASH_REDIS_REST_KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ??
    process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN;

  if (url && token) {
    const redis = new Redis({ url, token });
    return {
      kind: "redis",
      get: <T,>(key: string) => redis.get<T>(key),
      set: async (key, value, options) => {
        const result =
          options?.nx && options.ex
            ? await redis.set(key, value, {
                nx: true,
                ex: options.ex,
              })
            : options?.nx
              ? await redis.set(key, value, { nx: true })
              : options?.ex
                ? await redis.set(key, value, { ex: options.ex })
                : await redis.set(key, value);
        return result === "OK" ? "OK" : null;
      },
      del: (key) => redis.del(key),
      incr: (key) => redis.incr(key),
      expire: (key, seconds) => redis.expire(key, seconds),
    };
  }

  if (process.env.NODE_ENV === "production") return null;

  return {
    kind: "memory",
    async get<T>(key: string) {
      return readMemory(key) as T | null;
    },
    async set(key, value, options) {
      const store = getMemoryStore();
      if (options?.nx && readMemory(key) !== null) return null;
      store.values.set(key, value);
      if (options?.ex) {
        store.expirations.set(key, Date.now() + options.ex * 1000);
      } else {
        store.expirations.delete(key);
      }
      return "OK";
    },
    async del(key) {
      const store = getMemoryStore();
      const existed = store.values.delete(key);
      store.expirations.delete(key);
      return existed ? 1 : 0;
    },
    async incr(key) {
      const current = Number(readMemory(key) ?? 0) + 1;
      getMemoryStore().values.set(key, current);
      return current;
    },
    async expire(key, seconds) {
      if (readMemory(key) === null) return 0;
      getMemoryStore().expirations.set(
        key,
        Date.now() + seconds * 1000
      );
      return 1;
    },
  };
}
