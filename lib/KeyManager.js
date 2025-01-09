const pkg = require("../package.json");
const { apiEndpoint } = require("../constants");

class KeyManager {
  constructor() {
    this.confStore = null;
  }

  async init() {
    const configureStore = (await import("configstore")).default;
    this.confStore = new configureStore(pkg.name);
  }

  setKey(key) {
    if (this.confStore === null) {
      throw new Error("Class not initialized. Initialize before setting key");
    } else {
      this.confStore.set("apikey", key);
      return key;
    }
  }

  getKey(prop) {
    if (this.confStore === null) {
      throw new Error("Class not initialized. Initialize before getting key");
    }

    const key = this.confStore.get(prop);

    if (!key) {
      throw new Error("No API key found - Get a key at " + apiEndpoint);
    }

    return key;
  }

  deleteKey(prop) {
    if (this.confStore === null) {
      throw new Error("Class not initialized. Initialize before deleting key");
    }

    const key = this.confStore.get(prop);

    if (!key) {
      throw new Error(`No API key found - Get a key at ${apiEndpoint}`);
    }

    this.confStore.delete(prop);

    return;
  }
}

module.exports = KeyManager;
