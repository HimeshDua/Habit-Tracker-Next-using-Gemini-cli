
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model CompletedDate
 * 
 */
export type CompletedDate = $Result.DefaultSelection<Prisma.$CompletedDatePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Habits
 * const habits = await prisma.habit.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Habits
   * const habits = await prisma.habit.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedDate`: Exposes CRUD operations for the **CompletedDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedDates
    * const completedDates = await prisma.completedDate.findMany()
    * ```
    */
  get completedDate(): Prisma.CompletedDateDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Habit: 'Habit',
    CompletedDate: 'CompletedDate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "habit" | "completedDate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      CompletedDate: {
        payload: Prisma.$CompletedDatePayload<ExtArgs>
        fields: Prisma.CompletedDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedDateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedDateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload>
          }
          findFirst: {
            args: Prisma.CompletedDateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedDateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload>
          }
          findMany: {
            args: Prisma.CompletedDateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload>[]
          }
          create: {
            args: Prisma.CompletedDateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload>
          }
          createMany: {
            args: Prisma.CompletedDateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompletedDateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload>
          }
          update: {
            args: Prisma.CompletedDateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload>
          }
          deleteMany: {
            args: Prisma.CompletedDateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedDateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompletedDateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedDatePayload>
          }
          aggregate: {
            args: Prisma.CompletedDateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedDate>
          }
          groupBy: {
            args: Prisma.CompletedDateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedDateCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedDateCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    habit?: HabitOmit
    completedDate?: CompletedDateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    completedDates: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedDates?: boolean | HabitCountOutputTypeCountCompletedDatesArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountCompletedDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedDateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HabitMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    name: string
    _count: HabitCountAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    completedDates?: boolean | Habit$completedDatesArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>



  export type HabitSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedDates?: boolean | Habit$completedDatesArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      completedDates: Prisma.$CompletedDatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    completedDates<T extends Habit$completedDatesArgs<ExtArgs> = {}>(args?: Subset<T, Habit$completedDatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly name: FieldRef<"Habit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.completedDates
   */
  export type Habit$completedDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    where?: CompletedDateWhereInput
    orderBy?: CompletedDateOrderByWithRelationInput | CompletedDateOrderByWithRelationInput[]
    cursor?: CompletedDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedDateScalarFieldEnum | CompletedDateScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model CompletedDate
   */

  export type AggregateCompletedDate = {
    _count: CompletedDateCountAggregateOutputType | null
    _avg: CompletedDateAvgAggregateOutputType | null
    _sum: CompletedDateSumAggregateOutputType | null
    _min: CompletedDateMinAggregateOutputType | null
    _max: CompletedDateMaxAggregateOutputType | null
  }

  export type CompletedDateAvgAggregateOutputType = {
    id: number | null
  }

  export type CompletedDateSumAggregateOutputType = {
    id: number | null
  }

  export type CompletedDateMinAggregateOutputType = {
    id: number | null
    date: Date | null
    habitId: string | null
  }

  export type CompletedDateMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    habitId: string | null
  }

  export type CompletedDateCountAggregateOutputType = {
    id: number
    date: number
    habitId: number
    _all: number
  }


  export type CompletedDateAvgAggregateInputType = {
    id?: true
  }

  export type CompletedDateSumAggregateInputType = {
    id?: true
  }

  export type CompletedDateMinAggregateInputType = {
    id?: true
    date?: true
    habitId?: true
  }

  export type CompletedDateMaxAggregateInputType = {
    id?: true
    date?: true
    habitId?: true
  }

  export type CompletedDateCountAggregateInputType = {
    id?: true
    date?: true
    habitId?: true
    _all?: true
  }

  export type CompletedDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedDate to aggregate.
     */
    where?: CompletedDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedDates to fetch.
     */
    orderBy?: CompletedDateOrderByWithRelationInput | CompletedDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedDates
    **/
    _count?: true | CompletedDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompletedDateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompletedDateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedDateMaxAggregateInputType
  }

  export type GetCompletedDateAggregateType<T extends CompletedDateAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedDate[P]>
      : GetScalarType<T[P], AggregateCompletedDate[P]>
  }




  export type CompletedDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedDateWhereInput
    orderBy?: CompletedDateOrderByWithAggregationInput | CompletedDateOrderByWithAggregationInput[]
    by: CompletedDateScalarFieldEnum[] | CompletedDateScalarFieldEnum
    having?: CompletedDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedDateCountAggregateInputType | true
    _avg?: CompletedDateAvgAggregateInputType
    _sum?: CompletedDateSumAggregateInputType
    _min?: CompletedDateMinAggregateInputType
    _max?: CompletedDateMaxAggregateInputType
  }

  export type CompletedDateGroupByOutputType = {
    id: number
    date: Date
    habitId: string
    _count: CompletedDateCountAggregateOutputType | null
    _avg: CompletedDateAvgAggregateOutputType | null
    _sum: CompletedDateSumAggregateOutputType | null
    _min: CompletedDateMinAggregateOutputType | null
    _max: CompletedDateMaxAggregateOutputType | null
  }

  type GetCompletedDateGroupByPayload<T extends CompletedDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedDateGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedDateGroupByOutputType[P]>
        }
      >
    >


  export type CompletedDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    habitId?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedDate"]>



  export type CompletedDateSelectScalar = {
    id?: boolean
    date?: boolean
    habitId?: boolean
  }

  export type CompletedDateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "habitId", ExtArgs["result"]["completedDate"]>
  export type CompletedDateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $CompletedDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedDate"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      habitId: string
    }, ExtArgs["result"]["completedDate"]>
    composites: {}
  }

  type CompletedDateGetPayload<S extends boolean | null | undefined | CompletedDateDefaultArgs> = $Result.GetResult<Prisma.$CompletedDatePayload, S>

  type CompletedDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedDateCountAggregateInputType | true
    }

  export interface CompletedDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedDate'], meta: { name: 'CompletedDate' } }
    /**
     * Find zero or one CompletedDate that matches the filter.
     * @param {CompletedDateFindUniqueArgs} args - Arguments to find a CompletedDate
     * @example
     * // Get one CompletedDate
     * const completedDate = await prisma.completedDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedDateFindUniqueArgs>(args: SelectSubset<T, CompletedDateFindUniqueArgs<ExtArgs>>): Prisma__CompletedDateClient<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedDate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedDateFindUniqueOrThrowArgs} args - Arguments to find a CompletedDate
     * @example
     * // Get one CompletedDate
     * const completedDate = await prisma.completedDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedDateFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedDateClient<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedDateFindFirstArgs} args - Arguments to find a CompletedDate
     * @example
     * // Get one CompletedDate
     * const completedDate = await prisma.completedDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedDateFindFirstArgs>(args?: SelectSubset<T, CompletedDateFindFirstArgs<ExtArgs>>): Prisma__CompletedDateClient<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedDateFindFirstOrThrowArgs} args - Arguments to find a CompletedDate
     * @example
     * // Get one CompletedDate
     * const completedDate = await prisma.completedDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedDateFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedDateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedDateClient<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedDateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedDates
     * const completedDates = await prisma.completedDate.findMany()
     * 
     * // Get first 10 CompletedDates
     * const completedDates = await prisma.completedDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedDateWithIdOnly = await prisma.completedDate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedDateFindManyArgs>(args?: SelectSubset<T, CompletedDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedDate.
     * @param {CompletedDateCreateArgs} args - Arguments to create a CompletedDate.
     * @example
     * // Create one CompletedDate
     * const CompletedDate = await prisma.completedDate.create({
     *   data: {
     *     // ... data to create a CompletedDate
     *   }
     * })
     * 
     */
    create<T extends CompletedDateCreateArgs>(args: SelectSubset<T, CompletedDateCreateArgs<ExtArgs>>): Prisma__CompletedDateClient<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedDates.
     * @param {CompletedDateCreateManyArgs} args - Arguments to create many CompletedDates.
     * @example
     * // Create many CompletedDates
     * const completedDate = await prisma.completedDate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedDateCreateManyArgs>(args?: SelectSubset<T, CompletedDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CompletedDate.
     * @param {CompletedDateDeleteArgs} args - Arguments to delete one CompletedDate.
     * @example
     * // Delete one CompletedDate
     * const CompletedDate = await prisma.completedDate.delete({
     *   where: {
     *     // ... filter to delete one CompletedDate
     *   }
     * })
     * 
     */
    delete<T extends CompletedDateDeleteArgs>(args: SelectSubset<T, CompletedDateDeleteArgs<ExtArgs>>): Prisma__CompletedDateClient<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedDate.
     * @param {CompletedDateUpdateArgs} args - Arguments to update one CompletedDate.
     * @example
     * // Update one CompletedDate
     * const completedDate = await prisma.completedDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedDateUpdateArgs>(args: SelectSubset<T, CompletedDateUpdateArgs<ExtArgs>>): Prisma__CompletedDateClient<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedDates.
     * @param {CompletedDateDeleteManyArgs} args - Arguments to filter CompletedDates to delete.
     * @example
     * // Delete a few CompletedDates
     * const { count } = await prisma.completedDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedDateDeleteManyArgs>(args?: SelectSubset<T, CompletedDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedDates
     * const completedDate = await prisma.completedDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedDateUpdateManyArgs>(args: SelectSubset<T, CompletedDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompletedDate.
     * @param {CompletedDateUpsertArgs} args - Arguments to update or create a CompletedDate.
     * @example
     * // Update or create a CompletedDate
     * const completedDate = await prisma.completedDate.upsert({
     *   create: {
     *     // ... data to create a CompletedDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedDate we want to update
     *   }
     * })
     */
    upsert<T extends CompletedDateUpsertArgs>(args: SelectSubset<T, CompletedDateUpsertArgs<ExtArgs>>): Prisma__CompletedDateClient<$Result.GetResult<Prisma.$CompletedDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedDateCountArgs} args - Arguments to filter CompletedDates to count.
     * @example
     * // Count the number of CompletedDates
     * const count = await prisma.completedDate.count({
     *   where: {
     *     // ... the filter for the CompletedDates we want to count
     *   }
     * })
    **/
    count<T extends CompletedDateCountArgs>(
      args?: Subset<T, CompletedDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedDateAggregateArgs>(args: Subset<T, CompletedDateAggregateArgs>): Prisma.PrismaPromise<GetCompletedDateAggregateType<T>>

    /**
     * Group by CompletedDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedDateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedDateGroupByArgs['orderBy'] }
        : { orderBy?: CompletedDateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedDate model
   */
  readonly fields: CompletedDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedDate model
   */
  interface CompletedDateFieldRefs {
    readonly id: FieldRef<"CompletedDate", 'Int'>
    readonly date: FieldRef<"CompletedDate", 'DateTime'>
    readonly habitId: FieldRef<"CompletedDate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompletedDate findUnique
   */
  export type CompletedDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * Filter, which CompletedDate to fetch.
     */
    where: CompletedDateWhereUniqueInput
  }

  /**
   * CompletedDate findUniqueOrThrow
   */
  export type CompletedDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * Filter, which CompletedDate to fetch.
     */
    where: CompletedDateWhereUniqueInput
  }

  /**
   * CompletedDate findFirst
   */
  export type CompletedDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * Filter, which CompletedDate to fetch.
     */
    where?: CompletedDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedDates to fetch.
     */
    orderBy?: CompletedDateOrderByWithRelationInput | CompletedDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedDates.
     */
    cursor?: CompletedDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedDates.
     */
    distinct?: CompletedDateScalarFieldEnum | CompletedDateScalarFieldEnum[]
  }

  /**
   * CompletedDate findFirstOrThrow
   */
  export type CompletedDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * Filter, which CompletedDate to fetch.
     */
    where?: CompletedDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedDates to fetch.
     */
    orderBy?: CompletedDateOrderByWithRelationInput | CompletedDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedDates.
     */
    cursor?: CompletedDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedDates.
     */
    distinct?: CompletedDateScalarFieldEnum | CompletedDateScalarFieldEnum[]
  }

  /**
   * CompletedDate findMany
   */
  export type CompletedDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * Filter, which CompletedDates to fetch.
     */
    where?: CompletedDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedDates to fetch.
     */
    orderBy?: CompletedDateOrderByWithRelationInput | CompletedDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedDates.
     */
    cursor?: CompletedDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedDates.
     */
    skip?: number
    distinct?: CompletedDateScalarFieldEnum | CompletedDateScalarFieldEnum[]
  }

  /**
   * CompletedDate create
   */
  export type CompletedDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedDate.
     */
    data: XOR<CompletedDateCreateInput, CompletedDateUncheckedCreateInput>
  }

  /**
   * CompletedDate createMany
   */
  export type CompletedDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedDates.
     */
    data: CompletedDateCreateManyInput | CompletedDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompletedDate update
   */
  export type CompletedDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedDate.
     */
    data: XOR<CompletedDateUpdateInput, CompletedDateUncheckedUpdateInput>
    /**
     * Choose, which CompletedDate to update.
     */
    where: CompletedDateWhereUniqueInput
  }

  /**
   * CompletedDate updateMany
   */
  export type CompletedDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedDates.
     */
    data: XOR<CompletedDateUpdateManyMutationInput, CompletedDateUncheckedUpdateManyInput>
    /**
     * Filter which CompletedDates to update
     */
    where?: CompletedDateWhereInput
    /**
     * Limit how many CompletedDates to update.
     */
    limit?: number
  }

  /**
   * CompletedDate upsert
   */
  export type CompletedDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedDate to update in case it exists.
     */
    where: CompletedDateWhereUniqueInput
    /**
     * In case the CompletedDate found by the `where` argument doesn't exist, create a new CompletedDate with this data.
     */
    create: XOR<CompletedDateCreateInput, CompletedDateUncheckedCreateInput>
    /**
     * In case the CompletedDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedDateUpdateInput, CompletedDateUncheckedUpdateInput>
  }

  /**
   * CompletedDate delete
   */
  export type CompletedDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
    /**
     * Filter which CompletedDate to delete.
     */
    where: CompletedDateWhereUniqueInput
  }

  /**
   * CompletedDate deleteMany
   */
  export type CompletedDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedDates to delete
     */
    where?: CompletedDateWhereInput
    /**
     * Limit how many CompletedDates to delete.
     */
    limit?: number
  }

  /**
   * CompletedDate without action
   */
  export type CompletedDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedDate
     */
    select?: CompletedDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedDate
     */
    omit?: CompletedDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedDateInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HabitScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const CompletedDateScalarFieldEnum: {
    id: 'id',
    date: 'date',
    habitId: 'habitId'
  };

  export type CompletedDateScalarFieldEnum = (typeof CompletedDateScalarFieldEnum)[keyof typeof CompletedDateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const HabitOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HabitOrderByRelevanceFieldEnum = (typeof HabitOrderByRelevanceFieldEnum)[keyof typeof HabitOrderByRelevanceFieldEnum]


  export const CompletedDateOrderByRelevanceFieldEnum: {
    habitId: 'habitId'
  };

  export type CompletedDateOrderByRelevanceFieldEnum = (typeof CompletedDateOrderByRelevanceFieldEnum)[keyof typeof CompletedDateOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    name?: StringFilter<"Habit"> | string
    completedDates?: CompletedDateListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    completedDates?: CompletedDateOrderByRelationAggregateInput
    _relevance?: HabitOrderByRelevanceInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    name?: StringFilter<"Habit"> | string
    completedDates?: CompletedDateListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    name?: StringWithAggregatesFilter<"Habit"> | string
  }

  export type CompletedDateWhereInput = {
    AND?: CompletedDateWhereInput | CompletedDateWhereInput[]
    OR?: CompletedDateWhereInput[]
    NOT?: CompletedDateWhereInput | CompletedDateWhereInput[]
    id?: IntFilter<"CompletedDate"> | number
    date?: DateTimeFilter<"CompletedDate"> | Date | string
    habitId?: StringFilter<"CompletedDate"> | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }

  export type CompletedDateOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    habitId?: SortOrder
    habit?: HabitOrderByWithRelationInput
    _relevance?: CompletedDateOrderByRelevanceInput
  }

  export type CompletedDateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    date_habitId?: CompletedDateDateHabitIdCompoundUniqueInput
    AND?: CompletedDateWhereInput | CompletedDateWhereInput[]
    OR?: CompletedDateWhereInput[]
    NOT?: CompletedDateWhereInput | CompletedDateWhereInput[]
    date?: DateTimeFilter<"CompletedDate"> | Date | string
    habitId?: StringFilter<"CompletedDate"> | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }, "id" | "date_habitId">

  export type CompletedDateOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    habitId?: SortOrder
    _count?: CompletedDateCountOrderByAggregateInput
    _avg?: CompletedDateAvgOrderByAggregateInput
    _max?: CompletedDateMaxOrderByAggregateInput
    _min?: CompletedDateMinOrderByAggregateInput
    _sum?: CompletedDateSumOrderByAggregateInput
  }

  export type CompletedDateScalarWhereWithAggregatesInput = {
    AND?: CompletedDateScalarWhereWithAggregatesInput | CompletedDateScalarWhereWithAggregatesInput[]
    OR?: CompletedDateScalarWhereWithAggregatesInput[]
    NOT?: CompletedDateScalarWhereWithAggregatesInput | CompletedDateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompletedDate"> | number
    date?: DateTimeWithAggregatesFilter<"CompletedDate"> | Date | string
    habitId?: StringWithAggregatesFilter<"CompletedDate"> | string
  }

  export type HabitCreateInput = {
    id?: string
    name: string
    completedDates?: CompletedDateCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    name: string
    completedDates?: CompletedDateUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedDates?: CompletedDateUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedDates?: CompletedDateUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    name: string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedDateCreateInput = {
    date: Date | string
    habit: HabitCreateNestedOneWithoutCompletedDatesInput
  }

  export type CompletedDateUncheckedCreateInput = {
    id?: number
    date: Date | string
    habitId: string
  }

  export type CompletedDateUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutCompletedDatesNestedInput
  }

  export type CompletedDateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedDateCreateManyInput = {
    id?: number
    date: Date | string
    habitId: string
  }

  export type CompletedDateUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedDateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CompletedDateListRelationFilter = {
    every?: CompletedDateWhereInput
    some?: CompletedDateWhereInput
    none?: CompletedDateWhereInput
  }

  export type CompletedDateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitOrderByRelevanceInput = {
    fields: HabitOrderByRelevanceFieldEnum | HabitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type HabitScalarRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type CompletedDateOrderByRelevanceInput = {
    fields: CompletedDateOrderByRelevanceFieldEnum | CompletedDateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompletedDateDateHabitIdCompoundUniqueInput = {
    date: Date | string
    habitId: string
  }

  export type CompletedDateCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    habitId?: SortOrder
  }

  export type CompletedDateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompletedDateMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    habitId?: SortOrder
  }

  export type CompletedDateMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    habitId?: SortOrder
  }

  export type CompletedDateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompletedDateCreateNestedManyWithoutHabitInput = {
    create?: XOR<CompletedDateCreateWithoutHabitInput, CompletedDateUncheckedCreateWithoutHabitInput> | CompletedDateCreateWithoutHabitInput[] | CompletedDateUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: CompletedDateCreateOrConnectWithoutHabitInput | CompletedDateCreateOrConnectWithoutHabitInput[]
    createMany?: CompletedDateCreateManyHabitInputEnvelope
    connect?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
  }

  export type CompletedDateUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<CompletedDateCreateWithoutHabitInput, CompletedDateUncheckedCreateWithoutHabitInput> | CompletedDateCreateWithoutHabitInput[] | CompletedDateUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: CompletedDateCreateOrConnectWithoutHabitInput | CompletedDateCreateOrConnectWithoutHabitInput[]
    createMany?: CompletedDateCreateManyHabitInputEnvelope
    connect?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CompletedDateUpdateManyWithoutHabitNestedInput = {
    create?: XOR<CompletedDateCreateWithoutHabitInput, CompletedDateUncheckedCreateWithoutHabitInput> | CompletedDateCreateWithoutHabitInput[] | CompletedDateUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: CompletedDateCreateOrConnectWithoutHabitInput | CompletedDateCreateOrConnectWithoutHabitInput[]
    upsert?: CompletedDateUpsertWithWhereUniqueWithoutHabitInput | CompletedDateUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: CompletedDateCreateManyHabitInputEnvelope
    set?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
    disconnect?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
    delete?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
    connect?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
    update?: CompletedDateUpdateWithWhereUniqueWithoutHabitInput | CompletedDateUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: CompletedDateUpdateManyWithWhereWithoutHabitInput | CompletedDateUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: CompletedDateScalarWhereInput | CompletedDateScalarWhereInput[]
  }

  export type CompletedDateUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<CompletedDateCreateWithoutHabitInput, CompletedDateUncheckedCreateWithoutHabitInput> | CompletedDateCreateWithoutHabitInput[] | CompletedDateUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: CompletedDateCreateOrConnectWithoutHabitInput | CompletedDateCreateOrConnectWithoutHabitInput[]
    upsert?: CompletedDateUpsertWithWhereUniqueWithoutHabitInput | CompletedDateUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: CompletedDateCreateManyHabitInputEnvelope
    set?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
    disconnect?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
    delete?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
    connect?: CompletedDateWhereUniqueInput | CompletedDateWhereUniqueInput[]
    update?: CompletedDateUpdateWithWhereUniqueWithoutHabitInput | CompletedDateUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: CompletedDateUpdateManyWithWhereWithoutHabitInput | CompletedDateUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: CompletedDateScalarWhereInput | CompletedDateScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutCompletedDatesInput = {
    create?: XOR<HabitCreateWithoutCompletedDatesInput, HabitUncheckedCreateWithoutCompletedDatesInput>
    connectOrCreate?: HabitCreateOrConnectWithoutCompletedDatesInput
    connect?: HabitWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type HabitUpdateOneRequiredWithoutCompletedDatesNestedInput = {
    create?: XOR<HabitCreateWithoutCompletedDatesInput, HabitUncheckedCreateWithoutCompletedDatesInput>
    connectOrCreate?: HabitCreateOrConnectWithoutCompletedDatesInput
    upsert?: HabitUpsertWithoutCompletedDatesInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutCompletedDatesInput, HabitUpdateWithoutCompletedDatesInput>, HabitUncheckedUpdateWithoutCompletedDatesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompletedDateCreateWithoutHabitInput = {
    date: Date | string
  }

  export type CompletedDateUncheckedCreateWithoutHabitInput = {
    id?: number
    date: Date | string
  }

  export type CompletedDateCreateOrConnectWithoutHabitInput = {
    where: CompletedDateWhereUniqueInput
    create: XOR<CompletedDateCreateWithoutHabitInput, CompletedDateUncheckedCreateWithoutHabitInput>
  }

  export type CompletedDateCreateManyHabitInputEnvelope = {
    data: CompletedDateCreateManyHabitInput | CompletedDateCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type CompletedDateUpsertWithWhereUniqueWithoutHabitInput = {
    where: CompletedDateWhereUniqueInput
    update: XOR<CompletedDateUpdateWithoutHabitInput, CompletedDateUncheckedUpdateWithoutHabitInput>
    create: XOR<CompletedDateCreateWithoutHabitInput, CompletedDateUncheckedCreateWithoutHabitInput>
  }

  export type CompletedDateUpdateWithWhereUniqueWithoutHabitInput = {
    where: CompletedDateWhereUniqueInput
    data: XOR<CompletedDateUpdateWithoutHabitInput, CompletedDateUncheckedUpdateWithoutHabitInput>
  }

  export type CompletedDateUpdateManyWithWhereWithoutHabitInput = {
    where: CompletedDateScalarWhereInput
    data: XOR<CompletedDateUpdateManyMutationInput, CompletedDateUncheckedUpdateManyWithoutHabitInput>
  }

  export type CompletedDateScalarWhereInput = {
    AND?: CompletedDateScalarWhereInput | CompletedDateScalarWhereInput[]
    OR?: CompletedDateScalarWhereInput[]
    NOT?: CompletedDateScalarWhereInput | CompletedDateScalarWhereInput[]
    id?: IntFilter<"CompletedDate"> | number
    date?: DateTimeFilter<"CompletedDate"> | Date | string
    habitId?: StringFilter<"CompletedDate"> | string
  }

  export type HabitCreateWithoutCompletedDatesInput = {
    id?: string
    name: string
  }

  export type HabitUncheckedCreateWithoutCompletedDatesInput = {
    id?: string
    name: string
  }

  export type HabitCreateOrConnectWithoutCompletedDatesInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutCompletedDatesInput, HabitUncheckedCreateWithoutCompletedDatesInput>
  }

  export type HabitUpsertWithoutCompletedDatesInput = {
    update: XOR<HabitUpdateWithoutCompletedDatesInput, HabitUncheckedUpdateWithoutCompletedDatesInput>
    create: XOR<HabitCreateWithoutCompletedDatesInput, HabitUncheckedCreateWithoutCompletedDatesInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutCompletedDatesInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutCompletedDatesInput, HabitUncheckedUpdateWithoutCompletedDatesInput>
  }

  export type HabitUpdateWithoutCompletedDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type HabitUncheckedUpdateWithoutCompletedDatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedDateCreateManyHabitInput = {
    id?: number
    date: Date | string
  }

  export type CompletedDateUpdateWithoutHabitInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedDateUncheckedUpdateWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompletedDateUncheckedUpdateManyWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}