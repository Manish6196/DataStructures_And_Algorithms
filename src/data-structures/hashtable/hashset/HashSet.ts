class HashSet {
  private buckets: Array<Array<string>>;
  private capacity: number;
  private count: number;

  constructor(capacity: number = 50) {
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }, () => []);
    this.count = 0;
  }

  hash(key: string): number {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.capacity;
  }

  add(value: string): void {
    const index = this.hash(value);
    const bucket = this.buckets[index];
    const found = bucket.find(s => s === value);
    if (!found) {
      bucket.push(value);
      this.count++;
    }
  }

  has(value: string): boolean {
    const index = this.hash(value);
    const bucket = this.buckets[index];
    return bucket.some(s => s === value);
  }

  delete(value: string): boolean {
    const index = this.hash(value);
    const bucket = this.buckets[index];
    this.buckets[index] = bucket.filter(s => s !== value);
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

export default HashSet;
