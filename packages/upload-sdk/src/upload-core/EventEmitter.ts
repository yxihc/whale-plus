export class EventEmitter<T extends string> {
  private events: Map<T, Set<any>>;
  constructor() {
    this.events = new Map();
  }

  on(event: T, listener: any) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event)!.add(listener);
  }

  off(event: T, listener: any) {
    if (!this.events.has(event)) {
      return;
    }
    this.events.get(event)!.delete(listener);
  }

  once(event: T, listener: any) {
    const onceListener = (...args: any[]) => {
      listener(...args);
      this.off(event, onceListener);
    };
    this.on(event, onceListener);
  }

  emit(event: T, ...args: any[]) {
    if (!this.events.has(event)) {
      return;
    }
    this.events.get(event)!.forEach((listener) => {
      listener(...args);
    });
  }
}
