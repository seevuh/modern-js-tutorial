"use strict";

// #region Examples

// Basic function decoration
{
  function greet(name) {
    return `Hello, ${name}!`;
  }

  function withLogging(fn) {
    return function (...args) {
      console.log(`Calling function with args: ${args}`);
      const result = fn(...args);
      console.log(`Function returned: ${result}`);
      return result;
    };
  }

  const greetWithLogging = withLogging(greet);
  greetWithLogging('John');
}


// Practical example
{
  // Function that makes an API request
  async function fetchData(url) {
    const reposonse = await fetch(url);
    return response.json();
  }

  // Decorator for adding retry capability
  function withRetry(fn, maxRetries = 3) {
    return async function (...args) {
      let lastError;

      for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
          return await fn(...args);
        } catch (error) {
          console.log(`Attempt ${attempt + 1} failed, retrying...`);

          lastError = error;

          await new Promise(resolve => setTimeout(resolve, 300 * Math.pow(2, attempt)));
        }
      }

      throw new Error(`Max retries reached. Last error: ${lastError.message}`);
    };
  }

  // Decorator for caching results
  function withCache(fn, ttlMs = 60000) {
    const cache = new Map();

    return async function (...args) {
      const key = JSON.stringify(args);
      const cached = cache.get(key);

      if (cached && Date.now() - cached.timestamp < ttlMs) {
        console.log(`Cache hit!`);
        return cached.value;
      }

      console.log(`Cache miss, fetching fresh data...`);

      const result = await fn(...args);

      cache.set(key, {
        value: result,
        timestamp: Date.now()
      });

      return result;
    };
  }

  // Apply multiple decorators
  const enhancedFetch = withCache(withRetry(fetchData));

  // Usage
  async function main() {
    // First call - will fetch from API
    const data1 = await enhancedFetch('');

    // Second call - will use cached data
    const data2 = await enhancedFetch('');
  }
  // main();
}

// Object Decoration
{
  // Our base object
  const car = {
    model: 'Base Model',
    price: 20000,
    getDescription() {
      return `${this.model} costs $${this.price}`;
    }
  };

  // A decorator function for adding AC
  function withAC(car) {
    const decoratedCar = Object.create(car);

    decoratedCar.hasAC = true;
    decoratedCar.price = car.price + 1500;

    const originalDescription = car.getDescription;

    decoratedCar.getDescription = function () {
      return `${originalDescription.call(this)} and includes AC`;
    };

    return decoratedCar;
  }

  // A decorator function for adding premium sound
  function withPremiumSound(car) {
    const decoratedCar = Object.create(car);

    decoratedCar.hasPremiumSound = true;
    decoratedCar.price = car.price + 2000;

    const originalGetDescription = car.getDescription;

    decoratedCar.getDescription = function () {
      return `${originalGetDescription.call(this)} and includes premium sound`;
    };

    return decoratedCar;
  }


  // Created decorated cars
  const carWithAC = withAC(car);
  const carWithPremiumSound = withPremiumSound(car);
  const fullyLoadedCar = withPremiumSound(withAC(car));

  console.log(car.getDescription());

  console.log(carWithAC.price);
  console.log(carWithAC.getDescription());

  console.log(carWithPremiumSound.price);
  console.log(carWithPremiumSound.getDescription());

  console.log(fullyLoadedCar.price);
  console.log(fullyLoadedCar.getDescription());
}
// #endregion