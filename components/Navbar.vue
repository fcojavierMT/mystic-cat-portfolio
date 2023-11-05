<script setup>
import logo from '@/assets/images/logo.png'
import SwapTheme from './SwapTheme.vue'
import SelectLang from './SelectLang.vue'
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li class="text-[18px] ml-2">
            <NuxtLink to="/">{{ $t('navbar.works') }}</NuxtLink>
          </li>
          <li class="text-[18px] ml-2">
            <NuxtLink to="/about">{{ $t('navbar.about') }}</NuxtLink>
          </li>
          <li class="text-[18px] ml-2">
            <NuxtLink to="/art">{{ $t('navbar.art') }}</NuxtLink>
          </li>
          <li class="text-[18px] ml-2">
            <NuxtLink to="/animations">{{ $t('navbar.animations') }}</NuxtLink>
          </li>
        </ul>
      </div>
      <img :src="logo" alt="logo" class="w-[70px]" />
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li class="text-[18px] ml-2">
          <NuxtLink to="/">{{ $t('navbar.works') }}</NuxtLink>
        </li>
        <li class="text-[18px] ml-2">
          <NuxtLink to="/about">{{ $t('navbar.about') }}</NuxtLink>
        </li>
        <li class="text-[18px] ml-2">
          <NuxtLink to="/art">{{ $t('navbar.art') }}</NuxtLink>
        </li>
        <li class="text-[18px] ml-2">
          <NuxtLink to="/animations">{{ $t('navbar.animations') }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <SwapTheme />
      <SelectLang />
    </div>
  </div>
</template>
