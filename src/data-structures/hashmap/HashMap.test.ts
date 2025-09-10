import HashMap from "./HashMap";

describe("HashMap", () => {
  let map: HashMap<number>;

  beforeEach(() => {
    map = new HashMap();
  });

  test("should set and get a value", () => {
    map.set("key1", 100);
    expect(map.get("key1")).toBe(100);
  });

  test("should return undefined for non-existing keys", () => {
    expect(map.get("nonexistent")).toBeUndefined();
  });

  test("should update value if key already exists", () => {
    map.set("key1", 100);
    map.set("key1", 200);
    expect(map.get("key1")).toBe(200);
  });

  test("should correctly report if a key exists", () => {
    map.set("key1", 100);
    expect(map.has("key1")).toBe(true);
    expect(map.has("key2")).toBe(false);
  });

  test("should delete a key", () => {
    map.set("key1", 100);
    expect(map.has("key1")).toBe(true);
    expect(map.delete("key1")).toBe(true);
    expect(map.has("key1")).toBe(false);
  });

  test("should return false when trying to delete a non-existing key", () => {
    expect(map.delete("key1")).toBe(false);
  });

  test("should track size correctly", () => {
    expect(map.size()).toBe(0);
    map.set("key1", 100);
    expect(map.size()).toBe(1);
    map.set("key2", 200);
    expect(map.size()).toBe(2);
    map.delete("key1");
    expect(map.size()).toBe(1);
  });
});
