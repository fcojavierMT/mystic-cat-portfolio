<script setup>
import lady from '@/assets/images/comisions/lady.png'
import spanzer from '@/assets/images/sketch/spanzer.png'
import big from '@/assets/images/sketch/big.png'
</script>

<template>
  <section class="home-page p-5 flex justify-center flex-col flex-wrap font-montserrat">
    <ul class="types flex flex-row justify-center">
      <li class="m-5 badge badge-accent">Icon</li>
      <li class="m-5 badge badge-primary">Half</li>
      <li class="m-5 badge badge-secondary">Full</li>
    </ul>

    <section class="flex flex-row flex-wrap justify-center w-full">
      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <figure><img :src="lady" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ $t('comisions.flat') }}</h2>
          <p>{{ $t('comisions.flatDescription') }}</p>
          <div class="card-actions justify-end">
            <ul>
              <li class="badge m-1 badge-accent">25€</li>
              <li class="badge m-1 badge-primary">35€</li>
              <li class="badge m-1 badge-secondary">40€</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <figure><img :src="spanzer" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ $t('comisions.full') }}</h2>
          <p>{{ $t('comisions.fullDescription') }}</p>
          <div class="card-actions justify-end">
            <ul>
              <li class="badge m-1 badge-accent">30€</li>
              <li class="badge m-1 badge-primary">45€</li>
              <li class="badge m-1 badge-secondary">55€</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-xl image-full m-5">
        <figure><img :src="big" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{ $t('comisions.sketch') }}</h2>
          <p>{{ $t('comisions.sketchDescription') }}</p>
          <div class="card-actions justify-end">
            <ul>
              <li class="badge m-1 badge-accent">40€</li>
              <li class="badge m-1 badge-primary">55€</li>
              <li class="badge m-1 badge-secondary">75 / 230€</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
