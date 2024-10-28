var LRUCache = function(capacity) {
    this.capacity = capacity;
    this._map = new Map();
}

// 最近、最少使用，需要淘汰算法
LRUCache.prototype.get = function(key) {
    if (this._map.get(key)) {
        const value = this._map.get(key);
        this._map.delete(key);
        this._map.set(key, value);
        return value;
    }
    return -1;
}

LRUCache.prototype.set = function(key, value) {
    this._map.set(key, value);

    if (this._map.size > this.capacity) {
        const _mapIter = this._map.entries();
        this._map.delete(_mapIter.next().value[0]);
    }
}
