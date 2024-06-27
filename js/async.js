// https://jsonplaceholder.typicode.com
// user의 이름을 구하는 함수를 작성하시오.

const URL = 'https://jsonplaceholder.typicode.com';

// async function getUserName() {
const getUserName = async userId => {
  // const res = await fetch(URL + `/users/1`);
  const res = await fetch(`${URL}/users/${userId}`);
  //   console.log('🚀 ~ getUserName ~ res:', res);
  await new Promise((resolve, reject) => {
    setTimeout(() => resolve('OK'), 2000); //p243 resolve 일지 reject 일지 2초 뒤 까지 'OK' await
  }); //ssetTImeout 대신 fetch 사용 가능!
  const data = await res.json(); // await을 쓴 이유 data 담고 name return 값을 받기 위해 p249 연계
  //   console.log('🚀 ~ getUserName ~ data:', data);
  return data?.name;
};

(async function f() {
  // 즉시실행함수로 async를 쌈
  // console.log('1번 유저명:', getUserName(1));   -->1번 유저명: Promise { <pending> } 일케뜸
  console.log('1번 유저명:', await getUserName(1)); //async 될 때 까지 await (await 지워보면 앎)
})();
// async userId => {      async 라서 await 사용 가능
