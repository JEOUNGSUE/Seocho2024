// function currentCount() {
//   let currCount = 0; // private variable
//   return {
//     connect() {
//       currCount += 1;
//     }, //connect: function() { currCount = currCount + 1; } 객체 표현법
//     disconnect() {
//       currCount -= 1;
//     }, //disconnect: () => { currCount = currCount - 1; } 객체 표현볍
//     getCount() {
//       return currCount;
//     }, // getter method
//     get count() {
//       return currCount;
//     }, // readonly getter (accessor)
//   };
// }

// const actions = ['입장', '입장', '입장', '퇴장', '입장', '퇴장'];

// const counter = currentCount();
// for (const action of actions) {
//   action === '입장' ? counter.connect() : counter.disconnect();
//   console.log(`${action} -> 현재 입장객:  ${counter.count} 명`);
// }
// console.log('Current User Count=', counter.count); // counter.getCount()

// console.log('-------------------------------');

// git hub - 'seocho2024'

function currentCount() {
  let currCount = 0; // private variable
  return {
    connect() {
      currCount += 1;
    },
    disconnect() {
      currCount -= 1;
    },
    getCount() {
      return currCount;
    }, // getter method
    get count() {
      // readonly getter (accessor)
      return currCount;
    },
  };
}

const actions = ['입장', '입장', '입장', '퇴장', '입장', '퇴장'];

const counter = currentCount();
for (const action of actions) {
  action === '입장' ? counter.connect() : counter.disconnect();
  console.log(`${action} -> 현재 입장객:  ${counter.count} 명`);
}
console.log('Current User Count=', counter.count); // counter.getCount()
