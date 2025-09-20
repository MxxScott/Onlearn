<script setup>
import logo from '/images/logo.png'
</script>

<template>
  <div class="bg-[#D2E6E4] h-screen">
    <!-- background lines
    <div class="absolute inset-0 z-[-1]">
      <img src="/lines.svg" class="w-full h-full object-cover" />
    </div> -->

    <header class="header grid grid-cols-[auto_auto_auto] between items-center justify-between px-[82px] py-[43px]">
      <div class="logo flex items-center lg:gap-[15px] lg:ml-[37px]">
        <img :src="logo" alt="Logo" class="lg:h-[37.69px] w-[62.42px]" />
        <span
          class="font-extrabold font-picoblackal not-italic text-[30px] leading-[100%] tracking-[0] text-[#0B7077]">Onlearn</span>
      </div>

      <nav class="flex lg:gap-[80px]  h-fit">
        <NuxtLink to="/" class="h-fit text-[#FD661F] font-raleway font-bold text-[18px] leading-[100%] tracking-[2%]">Home
        </NuxtLink>
        <NuxtLink to="/careers"
          class="h-fit text-[#252641] font-raleway font-medium text-[18px] leading-[100%] tracking-[2%]">Careers
        </NuxtLink>
        <NuxtLink to="/blog"
          class="h-fit text-[#252641] font-raleway font-medium text-[18px] leading-[100%] tracking-[2%]">
          Blog</NuxtLink>
        <NuxtLink to="/about"
          class="h-fit text-[#252641] font-raleway font-medium text-[18px] leading-[100%] tracking-[2%]">About Us
        </NuxtLink>
      </nav>

      <div class="flex gap-[31.58px] h-fit">
        <button
          class="font-raleway font-[500] text-[16px] leading-[100%] tracking-[0.02em] uppercase bg-white text-[#0B7077] rounded-[10px] h-[59px] w-[135px]">
          LOG IN
        </button>
        <button
          class="bg-[#0B7077] font-raleway font-[500] text-[16px] leading-[100%] tracking-[0.02em] uppercase text-white rounded-[10px] h-[59px] w-[135px]">
          SIGN UP
        </button>
      </div>
    </header>

    <section class="content text-center py-12 sm:py-16 md:py-20 max-w-2xl mx-auto">
      <p class="">Never stop learning</p>
      <h1 class="">
        Grow up your skills by online courses with Onlearning
      </h1>

      <div class="cta flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
        <button
          class="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded h-fit text-sm sm:text-base md:text-lg">EXPLORE
          PATH</button>

        <div class="review flex items-center gap-2 sm:gap-4 md:gap-6 h-fit">
          <div class="flex -space-x-2 h-fit">
            <img src="" alt="reviewer" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full border" />
            <img src="" alt="reviewer" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full border" />
            <img src="" alt="reviewer" class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full border" />
          </div>
          <div class="text-xs sm:text-sm md:text-base h-fit">
            <div class="star">
              <div class="star-fill w-full"></div>
            </div>
            <div class="star">
              <div class="star-fill w-full"></div>
            </div>
            <div class="star">
              <div class="star-fill w-full"></div>
            </div>
            <div class="star">
              <div class="star-fill w-full"></div>
            </div>
            <div class="star">
              <div class="star-fill w-1/2"></div>
            </div>
            <p class="text-xs sm:text-sm md:text-base">(10k+ Reviews)</p>
          </div>
        </div>
      </div>
    </section>

    <div class="slice"></div>
    <div class="slice"></div>
    <div class="slice"></div>
    <div class="slice"></div>
    <div class="slice"></div>

    <footer class="footer h-fit"></footer>
</div></template>
