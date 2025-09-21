<script setup>
import logo from '~/assets/images/logo.png'
</script>

<template class="">
  <div class="bg-[#D2E6E4] h-screen rounded-b-[50px]">
    <!-- background lines
    <div class="absolute inset-0 z-[-1]">
      <img src="/lines.svg" class="w-full h-full object-cover" />
    </div> -->

    <header class=" header grid grid-cols-[auto_auto_auto] between items-center justify-between px-[82px] py-[43px] contain">
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

    <section class="mt-[61px] px-[80px]">
      <span class= " bg-white w-[222px] h[41px] rounded-[10px] font-raleway font-[500] text-[18px] leading-none tracking-[2%] text-[#252641] py-[10px] px-[25px]">Never stop learning</span>
      <span class=" w-[688px] h-[225px] px-[25px] py-[15px] font-raleway text-[64px] font-bold leading[75px] tracking-normal text-[#0B7077]">
        Grow up your skills by online courses with Onlearning
      </span>

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
          <div class="h-fit flex gap-[1.74px] p-[1.74px]">
            <div class="star">
              <div class="star-fill"></div>
            </div>
            <div class="star">
              <div class="star-fill"></div>
            </div>
            <div class="star">
              <div class="star-fill"></div>
            </div>
            <div class="star">
              <div class="star-fill"></div>
            </div>
            <div class="star">
              <div class="star-fill half"></div>
            </div>
            <p class="text-xs sm:text-sm md:text-base">(10k+ Reviews)</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class=""></div>
  <div class=""></div>
  <div class=""></div>
  <div class=""></div>
  <div class=""></div>

  <footer class="footer h-fit">
  </footer>
</template>

<style>
* {
  border: 1px solid black;
}
</style>
