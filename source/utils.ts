
/**
 * Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 */
export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

/**
 * Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.
 * Currently, when a union type of a primitive type is combined with literal types, TypeScript loses all information about the combined literals.
 * Thus, when such type is used in an IDE with autocompletion, no suggestions are made for the declared literals.
 * This type is a workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729). It will be removed as soon as it's not needed anymore.
 */
export type LiteralUnion<LiteralType extends BaseType, BaseType extends Primitive> =
  | LiteralType
  | (BaseType & {_?: never});
