class HashMap<V> {
  private buckets: Array<Array<[string, V]>>;
  private capacity: number;
  private count: number;

  constructor(capacity: number = 50) {
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }, () => []);
    this.count = 0;
  }

  private hash(key: string): number {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.capacity;
  }

  set(key: string, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const existing = bucket.find(([k]) => k === key);

    if (existing) {
      existing[1] = value;
    } else {
      bucket.push([key, value]);
      this.count++;
    }
  }

  get(key: string): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    const found = bucket.find(([k]) => k === key);
    return found ? found[1] : undefined;
  }

  has(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket.some(([k]) => k === key);
  }

  delete(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    this.buckets[index] = bucket.filter(([k]) => k !== key);
    if (bucket.length !== this.buckets[index].length) {
      this.count--;
      return true;
    }
    return false;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.count = 0;
  }

  size(): number {
    return this.count;
  }

  print(): void {
    this.buckets.forEach((bucket, index) => {
      if (bucket.length > 0) {
        console.log(`Bucket ${index}:`, bucket);
      }
    });
  }
}

export default HashMap;
