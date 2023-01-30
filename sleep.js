function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

async function test() {
  const t1 = +new Date()
  await sleep(3000)
  const t2 = +new Date()
  console.log(t2-t1)
}

test()
