/** Entity Adapter interface */
export interface Adapter<T, Z> {
  adapt(raw: Z): T
}
