import main from './bin/main.js';

// APP STARTER
// DO NOT MODIFY

// primary entry point to your program.
// executes when page is loaded
try {
  console.info('Loading windows');
  window.onload = await main();
} catch (error) {
  console.error(error);
}
