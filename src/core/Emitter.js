export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // Уведомляем слушателей если они есть
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // Подписываемся на уведомления
  // Добавляем нового слушателя
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listener[event] = 
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}

// example
// const emitter = new Emitter()

// emitter.subscribe('egorka', data => console.log('Sub:', data))
// emitter.emit('egorka', 42)
