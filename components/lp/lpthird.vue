<template>
  <div class="lpthird">
    <h1 class="thirdtitle">Why Choose Us?</h1>
  <div class="titlelines">
    <img class="vs v1" src="/Icons/LPthird/v1.svg" alt="v1" />
    <img class="vs v2" src="/Icons/LPthird/v2.svg" alt="v2" />
    <img class="vs v3" src="/Icons/LPthird/v3.svg" alt="v3" />
  </div>

    <Thirdcard
    v-for="(card, index) in cards"
    :key="index"
    :icon="card.icon"
    :title="card.title"
    :description="card.description"
    />

  </div>
  </template>
  
  <script setup>

  import image1 from '/Icons/LPthird/convenience.svg'
  import image2 from '/Icons/LPthird/security.svg'
  import image3 from '/Icons/LPthird/login.svg'
  import image4 from '/Icons/LPthird/tfs.svg'
  
  
  const cards = reactive([
  {
    icon: image1,
    title: 'Convenience',
    description: 'Make payments anytime, anywhere, without the need for physical cash or cards.'
  },
  {
    icon: image2,
    title: 'Security',
    description: 'Enjoy robust encryption and authentication measures to protect your financial information.'
  },
  {
    icon: image3,
    title: 'Secure Login Methods',
    description: 'Utilize biometric authentication (fingerprint or facial recognition) for added security.'
  },
  {
    icon: image4,
    title: '24/7 Access',
    description: 'Enjoy round-the-clock access to your accounts, making it easier to manage your finances at your convenience.'
  }
  ])
  </script>
  
  <style lang="scss" scoped>
  .lpthird {
  position: relative;
  height: 380px;
  background-color: #2f2a52;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  }
  
  .thirdtitle {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -470%);
  margin: 0;
  color: white;
  text-align: center;
  font-weight: 500;
  font-size: 1.8rem;
  }

  .titlelines {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -400%);
  }

.vs {
    width: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -2350%);
}

.v1{
    transform: translate(-50%, -2850%);
    width: 80px;
}

.v2{
    transform: translate(-50%, -3845%) rotate(-1deg);
    width: 60px;
}


  </style>
  