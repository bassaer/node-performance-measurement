import { PerformanceObserver, performance } from 'perf_hooks';


const obs = new PerformanceObserver(items => {
  console.log(`${items.getEntries()[0]?.name} => ${items.getEntries()[0]?.duration}`);
});

const work = (callback: () => void) => {
  setTimeout(() => {
    callback();
  }, 2000);
}

obs.observe({ type: 'measure', entryTypes: ['measure']});
performance.measure('Start');

performance.mark('A');

work(() => {
  performance.measure('A to Now', 'A');
  performance.mark('B');

  performance.measure('A to B', 'A', 'B');
});
