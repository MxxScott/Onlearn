<script setup>
/**
 * @file This Vue component renders the complete landing page for the "Onlearn" online learning platform.
 * @description It includes a hero section, course categories, feature highlights, a promotional section for gift cards, and a comprehensive footer.
 * @author [Your Name/Team Name]
 * @version 1.0.0
 */

// Import all necessary assets for the component.
// Grouping imports by type (images, icons) can improve readability.

// Images for branding, content, and illustrations
import logo from "~/assets/images/logo.png";
import reviewer1 from "~/assets/images/reviewer1.png";
import reviewer2 from "~/assets/images/reviewer2.png";
import reviewer3 from "~/assets/images/reviewer3.png";
import student from "~/assets/images/student.png";
import chart from "~/assets/images/chart.png";
import calendar from "~/assets/images/calendar.png";
import beauty from "~/assets/images/beauty.png";
import medical from "~/assets/images/medical.png";
import sports from "~/assets/images/sports.png";
import nutrition from "~/assets/images/nutrition.png";
import giftcards from "~/assets/images/giftcards.png";
import pana from "~/assets/images/pana.png";
import id_front from "~/assets/images/id_card_front.png";
import id_back from "~/assets/images/id_card_back.png";
import pmbc from "~/assets/images/pmbc.png"
import bdspc from "~/assets/images/bdspc.png"
import tsowb from "~/assets/images/tsowb.png"
import pfes from "~/assets/images/pfes.png"
import blink from "~/assets/images/blink.png"
import ander from "~/assets/images/ander.png"
import bird from "~/assets/images/bird.png"
import bartender from "~/assets/images/bartender.png"
import bill from "~/assets/images/bill.png"


// SVG Icons used for decorative purposes and UI elements
import line1 from "~/assets/icons/line1.svg";
import line2 from "~/assets/icons/line2.svg";
import line3 from "~/assets/icons/line3.svg";
import Calling from "~/assets/icons/Calling.svg";
import Location from "~/assets/icons/Location.svg";
import Message from "~/assets/icons/Message.svg";
import Time from "~/assets/icons/Time.svg";
import top_lines1 from "~/assets/icons/top_lines1.svg";
import top_lines2 from "~/assets/icons/top_lines2.svg";
import top_lines3 from "~/assets/icons/top_lines3.svg";
import top_lines4 from "~/assets/icons/top_lines4.svg";
import top_lines5 from "~/assets/icons/top_lines5.svg";
import top_lines6 from "~/assets/icons/top_lines6.svg";
import top_lines7 from "~/assets/icons/top_lines7.svg";
import top_lines8 from "~/assets/icons/top_lines8.svg";
import bottom_lines1 from "~/assets/icons/bottom_lines1.svg";
import bottom_lines2 from "~/assets/icons/bottom_lines2.svg";
import bottom_lines3 from "~/assets/icons/bottom_lines3.svg";
import bottom_lines4 from "~/assets/icons/bottom_lines4.svg";
import bottom_lines5 from "~/assets/icons/bottom_lines5.svg";
import bottom_lines6 from "~/assets/icons/bottom_lines6.svg";
import bottom_lines7 from "~/assets/icons/bottom_lines7.svg";
import bottom_lines8 from "~/assets/icons/bottom_lines8.svg";
import star_outline from "~/assets/icons/star_outline.svg";
import grid from "~/assets/icons/grid.svg";
import slides from "~/assets/icons/slides.svg";
import teachers from "~/assets/icons/teachers.svg";
import vector1 from "~/assets/icons/popular_vector.svg";
import vector2 from "~/assets/icons/course_vector.svg";
import strikethrough from "~/assets/icons/strikethrough.svg";
</script>

<template>
  <!-- ========================================================================= -->
  <!-- HERO SECTION -->
  <!-- The main landing view with navigation, headline, and call-to-action. -->
  <!-- ========================================================================= -->
  <section class="relative bg-[#D2E6E4] h-screen rounded-b-[50px] overflow-hidden justify-between">
    <!-- Decorative background lines for visual flair -->
    <div class="relative opacity-[0.6] z-[15] w-full">
      <img :src="top_lines1" class="absolute left-[165.28px]" />
      <img :src="top_lines2" class="absolute left-[123.15px]" />
      <img :src="top_lines3" class="absolute left-[204.7px]" />
      <img :src="top_lines4" class="absolute left-[133.49px]" />
      <img :src="top_lines5" class="absolute left-[149.93px]" />
      <img :src="top_lines6" class="absolute left-[140.8px]" />
      <img :src="top_lines7" class="absolute left-[116.86px]" />
      <img :src="top_lines8" class="absolute left-[130.25px]" />
    </div>

    <!-- Header: Contains the logo, navigation links, and authentication buttons. -->
    <header class="header relative z-[30] grid grid-cols-[auto_auto_auto] py-[43px] items-center">
      <!-- Logo -->
      <div class="logo flex items-center lg:gap-[15px] w-auto h-fit absolute left-[119px] top-[53.66px]">
        <img :src="logo" alt="Logo" class="lg:h-[37.69px] w-[62.42px]" />
        <span class=" w-[105px] font-extrabold font-picoblackal not-italic text-[30px] leading-[100%]  text-[#0B7077]">
          Onlearn
        </span>
      </div>

      <!-- Main Navigation -->
      <nav class="absolute flex h-fit lg:gap-[80px] w-auto self-center top-[62px] left-[437.42px] ">
        <NuxtLink to="/" class="h-fit text-[#FD661F] font-raleway font-bold text-[18px] leading-[100%] tracking-wide">Home
        </NuxtLink>
        <NuxtLink to="/careers"
          class="h-fit text-[#252641] font-raleway font-medium text-[18px] leading-[100%] tracking-wide">Careers
        </NuxtLink>
        <NuxtLink to="/blog"
          class="h-fit text-[#252641] font-raleway font-medium text-[18px] leading-[100%] tracking-wide">Blog</NuxtLink>
        <NuxtLink to="/about"
          class="h-fit text-[#252641] font-raleway font-medium text-[18px] leading-[100%] tracking-wide">About Us
        </NuxtLink>
      </nav>

      <!-- User Authentication Buttons -->
      <div class="flex justify-between w-[301.58px] h-fit absolute right-[82px] top-[43px]">
        <button type="button" class="btn-primary btn-outline h-fit">
          LOG IN
        </button>
        <button type="button" class="btn-primary btn-filled h-fit">
          SIGN UP
        </button>
      </div>
    </header>

    <!-- Additional decorative background lines -->
    <img :src="line1" alt="line 1" class="absolute z-[0] bottom-[339.33px] left-[171.12px] ">
    <img :src="line2" alt="line 2" class="absolute z-[0] left-[219.16px] bottom-[260px]">
    <img :src="line3" alt="line 3" class="absolute z-[0] bottom-[413.72px] left-[526.16px] ">

    <!-- Student Illustration -->
    <img :src="student" alt="Student illustration" class="absolute bottom-0 right-0 z-[10]" />

    <!-- Hero Content: Main headline and introductory text. -->
    <span
      class="absolute z-[20] left-[105px] bottom-[480px] bg-white w-fit h-fit rounded-[10px] font-raleway font-[500] text-[18px] leading-none tracking-wide text-[#252641] py-[10px] px-[25px]">
      Never stop learning
    </span>
    <h1
      class="absolute z-[20] left-[105px] bottom-[240px] w-[688px] font-raleway text-[64px] font-bold leading-[75px]  text-[#0B7077]">
      Grow up your skills by online courses with Onlearning
    </h1>

    <!-- Call to Action & Social Proof -->
    <div class="absolute z-[20] left-[112px] bottom-[153px] flex flex-row items-center">
      <!-- Primary CTA Button -->
      <button
        class="bg-[#FD661F] mx-[7px] text-white px-[30px] py-[20px] rounded-[10px] h-fit w-fit font-raleway font-[500] text-[16px] leading-none tracking-[0.02em] uppercase">
        EXPLORE PATH
      </button>

      <!-- Social Proof: Reviewer avatars and star rating -->
      <div class="mx-[5px] flex flex-row h-fit w-fit gap-[8.7px]">
        <div class="flex -space-x-[14.795px] h-fit">
          <img :src="reviewer1" alt="Reviewer profile 1" class="size-[52.21px]" />
          <img :src="reviewer2" alt="Reviewer profile 2" class="size-[52.21px]" />
          <img :src="reviewer3" alt="Reviewer profile 3" class="size-[52.21px]" />
        </div>
        <div class="h-fit">
          <!-- Star Rating Display (uses custom CSS for fill) -->
          <div class="h-fit flex flex-row gap-[1.74px] p-[1.74px]">
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
          </div>
          <span class="font-raleway font-semibold text-[12.18px] leading-[165%]  text-[#230F0F]">
            (10k+ Reviews)
          </span>
        </div>
      </div>
    </div>

    <!-- Floating Card: Displays key metrics or stats -->
    <div
      class="absolute flex gap-[32px] items-center px-[28px] py-[15px] bottom-[184.11px] right-[420px] h-[100px] rounded-[20px] bg-white opacity-80 backdrop-blur-[20px] z-[20]">
      <div class="size-[50px] p-[11.25px] bg-[#23BDEE] rounded-[8px] text-center items-center">
        <img :src="calendar" alt="calendar" class="size-[27.5px]" />
      </div>
      <div class="flex flex-col">
        <span
          class="font-[700] h-fit items-center font-nunito text-[24px] leading-[180%] tracking-[0.02em] text-[#595959]">
          250k
        </span>
        <span class="font-[600] mt-[-9px] h-fit font-nunito text-[20px] leading-[180%] tracking-[0.02em] text-[#545567]">
          Assisted Student
        </span>
      </div>
    </div>

    <!-- Floating Chart Icon -->
    <div
      class="absolute bottom-[327px] right-[121px] size-[69px] rounded-[14px] border bg-[#FD661F] shadow-[0px_8px_40px_0px_#D24D6542] border-[#FD661F] p-[12px] z-[20]">
      <img :src="chart" alt="chart" class="w-[47.3px] h-[44.85px] rounded-[8px]" />
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- MAIN CONTENT SECTION -->
  <!-- Contains all sections below the hero. -->
  <!-- ========================================================================= -->
  <section class="pt-[185px] pb-[245px] px-[80px] gap-[110px] flex flex-col ">

    <div class="flex flex-col w-full justify-center gap-[61px] px-[10.5px]">
      <!-- Section Header -->
      <div class="flex flex-col gap-[39.68px] text-center items-center relative">
        <h1 class="font-inter font-[700] text-[48px] leading-[62.4px] text-[#FD661F] tracking-[-0.06em]">Popular Courses
        </h1>
        <div class="grid grid-cols-6 gap-[24px]">
          <button type="button"
            class="rounded-[5px] px-[20px] py-[10px] bg-[#0B7077] text-[white] font-raleway font-[500] text-[12px] leading-none ">All
            Programme</button>
          <button type="button"
            class="rounded-[5px] px-[20px] py-[10px] text-[#0B7077] bg-[white] font-raleway font-[500] text-[12px] leading-none border border-[#C4C4C4] hover:bg-[#0B7077] hover:text-[white] transition duration-500">Ui/Ux
            Design</button>
          <button type="button"
            class="rounded-[5px] px-[20px] py-[10px] text-[#0B7077] bg-[white] font-raleway font-[500] text-[12px] leading-none border border-[#C4C4C4] hover:bg-[#0B7077] hover:text-[white] transition duration-500">Program
            Design</button>
          <button type="button"
            class="rounded-[5px] px-[20px] py-[10px] text-[#0B7077] bg-[white] font-raleway font-[500] text-[12px] leading-none border border-[#C4C4C4] hover:bg-[#0B7077] hover:text-[white] transition duration-500">Program
            Design</button>
          <button type="button"
            class="rounded-[5px] px-[20px] py-[10px] text-[#0B7077] bg-[white] font-raleway font-[500] text-[12px] leading-none border border-[#C4C4C4] hover:bg-[#0B7077] hover:text-[white] transition duration-500">Program
            Design</button>
          <button type="button"
            class="rounded-[5px] px-[20px] py-[10px] text-[#0B7077] bg-[white] font-raleway font-[500] text-[12px] leading-none border border-[#C4C4C4] hover:bg-[#0B7077] hover:text-[white] transition duration-500">Program
            Design</button>
        </div>
        <img :src="vector1" class="absolute top-[64.05px] left-[653px]" />
      </div>

      <div class="grid grid-cols-4 gap-[25px]">

        <div
          class="bg-white flex flex-col w-full h-[428px] transition-shadow duration-500 rounded-[14px] relative shadow-[0px_10px_60px_0px_#262D7614] overflow-hidden">
          <div class="flex items-center justify-between left-[17px] right-[17.69px] absolute top-[372px]">
            <div class="flex relative">
              <span class="text-[#FD661F] w-[52.82px] font-inter font-[700] text-[16.68px] leading-[1.5]">$ 123</span>
              <span class="font-inter font-[400] text-[14.83px] leading-[1.5] text-[#230F0F]">
                <img :src="strikethrough" class="relative opacity-50 z-10 top-[12.05px] object-cover">$ 500
              </span>
            </div>
            <button class="
              rounded-[5px] px-[20px] py-[10px]
            hover:bg-white hover:text-[#0B7077]
              font-raleway font-[500] text-[12px] leading-none
              transition duration-500
            bg-[#0B7077] text-white hover:border hover:border-[#0B7077]
              ">
              Enroll Now
            </button>
          </div>
          <div
            class="bg-[#FAFAFA] absolute items-center top-[165px] rounded-[40px] left-1/2 -translate-x-1/2 justify-between w-[233.75px] px-[10px] py-[5px] flex gap-[5px]">
            <div class="flex -space-x-[8.27px] h-fit object-contain">
              <img :src="blink" class="size-[29.19] z-50  object-contain" />
              <img :src="ander" class="size-[29.19] z-40  object-contain" />
              <img :src="bird" class="size-[29.19] z-30 object-contain" />
              <img :src="bartender" class="size-[29.19] z-20 object-contain" />
              <img :src="bill" class="size-[29.19] object-contain" />
            </div>
            <span
              class="font-kanit font-[400] text-[16px] leading-[28px] tracking-[0.02em] text-[#263238] rotate-[0.17deg]">+</span>
            <div class="justify-between flex">
              <span class="font-raleway font-[500] text-[16px] leading-[18px] text-[#263238] items-center">40</span>
              <span class="font-raleway font-[500] text-[14px] leading-[18px] text-[#263238] items-center">students</span>
            </div>
          </div>
          <img :src="pmbc" class="w-full h-[179px] size-[50px] object-cover" />
          <div class="w-[264.27px] mt-[47px] ml-[17px] mb-[31px] flex flex-col">
            <span class="font-raleway font-[400] text-[10px] leading-[1.5] text-[#777795]">1 - 28 July 2022</span>
            <span class="font-raleway font-[800] text-[15.52px] leading-[1.5] tracking-[0.39px] text-[#0B7077]">Product
              Management Basic - Course</span>
            <span class="w-[251.69px] font-raleway font-[400] text-[10px] leading-[1.6] text-[#4D4D4D]">Product Management
              Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</span>
          </div>
        </div>

        <div
          class="bg-white flex flex-col w-full h-[428px] transition-shadow duration-500 rounded-[14px] relative shadow-[0px_10px_60px_0px_#262D7614] overflow-hidden">
          <div class="flex items-center justify-between left-[17px] right-[17.69px] absolute top-[372px]">
            <div class="flex relative">
              <span class="text-[#FD661F] w-[52.82px] font-inter font-[700] text-[16.68px] leading-[1.5]">$ 123</span>
              <span class="font-inter font-[400] text-[14.83px] leading-[1.5] text-[#230F0F]">
                <img :src="strikethrough" class="relative opacity-50 z-10 top-[12.05px] object-cover">$ 500
              </span>
            </div>
            <button class="
              rounded-[5px] px-[20px] py-[10px]
            hover:bg-white hover:text-[#0B7077]
              font-raleway font-[500] text-[12px] leading-none
              transition duration-500
            bg-[#0B7077] text-white hover:border hover:border-[#0B7077]
              ">
              Enroll Now
            </button>
          </div>
          <div
            class="bg-[#FAFAFA] absolute items-center top-[165px] rounded-[40px] left-1/2 -translate-x-1/2 justify-between w-[233.75px] px-[10px] py-[5px] flex gap-[5px]">
            <div class="flex -space-x-[8.27px] h-fit object-contain">
              <img :src="blink" class="size-[29.19] z-50  object-contain" />
              <img :src="ander" class="size-[29.19] z-40  object-contain" />
              <img :src="bird" class="size-[29.19] z-30 object-contain" />
              <img :src="bartender" class="size-[29.19] z-20 object-contain" />
              <img :src="bill" class="size-[29.19] object-contain" />
            </div>
            <span
              class="font-kanit font-[400] text-[16px] leading-[28px] tracking-[0.02em] text-[#263238] rotate-[0.17deg]">+</span>
            <div class="justify-between flex">
              <span class="font-raleway font-[500] text-[16px] leading-[18px] text-[#263238] items-center">11</span>
              <span class="font-raleway font-[500] text-[14px] leading-[18px] text-[#263238] items-center">students</span>
            </div>
          </div>
          <img :src="bdspc" class="w-full h-[179px] size-[50px] object-cover" />
          <div class="w-[264.27px] mt-[47px] ml-[17px] mb-[31px] flex flex-col">
            <span class="font-raleway font-[400] text-[10px] leading-[1.5] text-[#777795]">1 - 28 July 2022</span>
            <span class="font-raleway font-[800] text-[15.52px] leading-[1.5] tracking-[0.39px] text-[#0B7077]">BM Data
              Science Professional Certificate</span>
            <span class="w-[251.69px] font-raleway font-[400] text-[10px] leading-[1.6] text-[#4D4D4D]">Product Management
              Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</span>
          </div>

        </div>

        <div
          class="bg-white flex flex-col w-full h-[428px] transition-shadow duration-500 rounded-[14px] relative shadow-[0px_10px_60px_0px_#262D7614] overflow-hidden">
          <div class="flex items-center justify-between left-[17px] right-[17.69px] absolute top-[372px]">
            <div class="flex relative">
              <span class="text-[#FD661F] w-[52.82px] font-inter font-[700] text-[16.68px] leading-[1.5]">$ 123</span>
              <span class="font-inter font-[400] text-[14.83px] leading-[1.5] text-[#230F0F]">
                <img :src="strikethrough" class="relative opacity-50 z-10 top-[12.05px] object-cover">$ 500
              </span>
            </div>
            <button class="
              rounded-[5px] px-[20px] py-[10px]
            hover:bg-white hover:text-[#0B7077]
              font-raleway font-[500] text-[12px] leading-none
              transition duration-500
            bg-[#0B7077] text-white hover:border hover:border-[#0B7077]
              ">
              Enroll Now
            </button>
          </div>
          <div
            class="bg-[#FAFAFA] absolute items-center top-[165px] rounded-[40px] left-1/2 -translate-x-1/2 justify-between w-[233.75px] px-[10px] py-[5px] flex gap-[5px]">
            <div class="flex -space-x-[8.27px] h-fit object-contain">
              <img :src="blink" class="size-[29.19] z-50  object-contain" />
              <img :src="ander" class="size-[29.19] z-40  object-contain" />
              <img :src="bird" class="size-[29.19] z-30 object-contain" />
              <img :src="bartender" class="size-[29.19] z-20 object-contain" />
              <img :src="bill" class="size-[29.19] object-contain" />
            </div>
            <span
              class="font-kanit font-[400] text-[16px] leading-[28px] tracking-[0.02em] text-[#263238] rotate-[0.17deg]">+</span>
            <div class="justify-between flex">
              <span class="font-raleway font-[500] text-[16px] leading-[18px] text-[#263238] items-center">234</span>
              <span class="font-raleway font-[500] text-[14px] leading-[18px] text-[#263238] items-center">students</span>
            </div>
          </div>
          <img :src="tsowb" class="w-full h-[179px] size-[50px] object-cover" />
          <div class="w-[264.27px] mt-[47px] ml-[17px] mb-[31px] flex flex-col">
            <span class="font-raleway font-[400] text-[10px] leading-[1.5] text-[#777795]">1 - 28 July 2022</span>
            <span class="font-raleway font-[800] text-[15.52px] leading-[1.5] tracking-[0.39px] text-[#0B7077]">The
              Science of Well-Being</span>
            <span class="w-[251.69px] font-raleway font-[400] text-[10px] leading-[1.6] text-[#4D4D4D]">Product Management
              Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</span>
          </div>
        </div>

        <div
          class="bg-white flex flex-col w-full h-[428px] transition-shadow duration-500 rounded-[14px] relative shadow-[0px_10px_60px_0px_#262D7614] overflow-hidden">
          <div class="flex items-center mb-[22px] justify-between left-[17px] right-[17.69px] absolute top-[372px]">
            <div class="flex relative">
              <span class="text-[#FD661F] w-[52.82px] font-inter font-[700] text-[16.68px] leading-[1.5]">$ 123</span>
              <span class="font-inter font-[400] text-[14.83px] leading-[1.5] text-[#230F0F]">
                <img :src="strikethrough" class="relative opacity-50 z-10 top-[12.05px] object-cover">$ 500
              </span>
            </div>
            <button class="
              rounded-[5px] px-[20px] py-[10px]
            hover:bg-white hover:text-[#0B7077]
              font-raleway font-[500] text-[12px] leading-none
              transition duration-500
            bg-[#0B7077] text-white hover:border hover:border-[#0B7077]
              ">
              Enroll Now
            </button>
          </div>
          <div
            class="bg-[#FAFAFA] absolute items-center top-[165px] rounded-[40px] left-1/2 -translate-x-1/2 justify-between w-[233.75px] px-[10px] py-[5px] flex gap-[5px]">
            <div class="flex -space-x-[8.27px] h-fit object-contain">
              <img :src="blink" class="size-[29.19] z-50  object-contain" />
              <img :src="ander" class="size-[29.19] z-40  object-contain" />
              <img :src="bird" class="size-[29.19] z-30 object-contain" />
              <img :src="bartender" class="size-[29.19] z-20 object-contain" />
              <img :src="bill" class="size-[29.19] object-contain" />
            </div>
            <span
              class="font-kanit font-[400] text-[16px] leading-[28px] tracking-[0.02em] text-[#263238] rotate-[0.17deg]">+</span>
            <div class="justify-between flex">
              <span class="font-raleway font-[500] text-[16px] leading-[18px] text-[#263238] items-center">342</span>
              <span class="font-raleway font-[500] text-[14px] leading-[18px] text-[#263238] items-center">students</span>
            </div>
          </div>
          <img :src="pfes" class="w-full h-[179px] size-[50px] object-cover" />
          <div class="w-[264.27px] mt-[47px] ml-[17px] flex flex-col">
            <span class="font-raleway font-[400] text-[10px] leading-[1.5] text-[#777795]">1 - 28 July 2022</span>
            <span class="font-raleway font-[800] text-[15.52px] leading-[1.5] tracking-[0.39px] text-[#0B7077]">Python for
              Everybody Specialization</span>
            <span class="w-[251.69px] font-raleway font-[400] text-[10px] leading-[1.6] text-[#4D4D4D]">Product Management
              Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.</span>
          </div>

        </div>


      </div>
    </div>



    <!-- Course Category Section -->
    <div class="w-fit flex flex-col gap-[83px] justify-center items-center">
      <div class="flex flex-col w-full justify-center gap-[59px]">
        <!-- Section Header -->
        <div class="flex flex-col gap-[39.83px] text-center items-center relative">
          <h1 class="font-inter font-[700] text-[48px] leading-[62.4px] text-[#0B7077] tracking-[-0.06em]">Courses
            Category
          </h1>
          <span class="font-raleway w-[828px] font-[400] text-[22px] leading-[1.6] text-[#696984]">Onlearing is one
            powerful online software suite that combines all the tools needed to run a successful school or office.</span>
          <img :src="vector2" class="absolute top-[64.05px] left-[653px]" />
        </div>

        <!-- Grid of Course Category Cards -->
        <div class="grid grid-cols-4 gap-[40px]">

          <!-- Card 1: Beauty -->
          <div
            class="relative h-[329px] group bg-white px-[15px] transition-shadow duration-500 flex flex-col items-center rounded-[15px] hover:shadow-[0px_50px_80px_0px_#0000000D]">
            <span class="relative inline-block mt-[30px] rounded-full size-[50px] bg-[#A3D3FF]">
              <img :src="beauty"
                class="absolute size-[50px] object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </span>
            <span class="mt-[24px] font-raleway font-[600] text-[27px] leading-none text-[#0B7077]">Beauty</span>
            <span
              class="text-center mt-[23px] mb-[112px] w-[260px] font-raleway font-[500] text-[18px] leading-[29px] text-[#696984]">
              One powerful online software suite that combines
            </span>
            <!-- Interactive button changes text and style on hover -->
            <button
              class="
            top-[255px] absolute rounded-[10px] px-[62px] py-[12px]
            bg-white text-[#0B7077]
            font-raleway font-[500] text-[15px] leading-none text-center
            shadow-[0px_10px_60px_0px_#262D7614]
            transition-all ease-in-out duration-500
            group-hover:bg-[#FD661F] group-hover:text-white group-hover:px-[40px]
            group-hover:hover:bg-white group-hover:hover:text-[#0B7077] group-hover:hover:border group-hover:hover:border-[#0B7077]">
              <span class="hidden group-hover:block">Explore courses</span>
              <span class="block group-hover:hidden">more</span>
            </button>
          </div>

          <!-- Card 2: Medical -->
          <div
            class="relative h-[329px] group bg-white px-[15px] transition-shadow duration-500 flex flex-col items-center rounded-[15px] hover:shadow-[0px_50px_80px_0px_#0000000D]">
            <div class="relative mt-[30px] flex items-center justify-center rounded-full size-[50px] bg-[#F1C9FF]">
              <img :src="medical"
                class="absolute size-[72px] object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span class="mt-[24px] font-raleway font-[600] text-[27px] leading-none text-[#0B7077]">Medical</span>
            <span
              class="text-center mt-[23px] mb-[112px] w-[260px] font-raleway font-[500] text-[18px] leading-[29px] text-[#696984]">
              One powerful online software suite that combines
            </span>
            <button
              class="
            top-[255px] absolute rounded-[10px] px-[62px] py-[12px]
            bg-white text-[#0B7077]
            font-raleway font-[500] text-[15px] leading-none text-center
            shadow-[0px_10px_60px_0px_#262D7614]
            transition-all ease-in-out duration-500
            group-hover:bg-[#FD661F] group-hover:text-white group-hover:px-[40px]
            group-hover:hover:bg-white group-hover:hover:text-[#0B7077] group-hover:hover:border group-hover:hover:border-[#0B7077]">
              <span class="hidden group-hover:block">Explore courses</span>
              <span class="block group-hover:hidden">more</span>
            </button>
          </div>

          <!-- Card 3: Sports -->
          <div
            class="relative h-[329px] group bg-white px-[15px] transition-shadow duration-500 flex flex-col items-center rounded-[15px] hover:shadow-[0px_50px_80px_0px_#0000000D]">
            <div class="relative inline-block mt-[30px] rounded-full h-[50px] w-[103px]">
              <img :src="sports"
                class="absolute size-[103px] object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span class="mt-[24px] font-raleway font-[600] text-[27px] leading-none text-[#0B7077]">Sports</span>
            <span
              class="text-center mt-[23px] mb-[112px] w-[260px] font-raleway font-[500] text-[18px] leading-[29px] text-[#696984]">
              One powerful online software suite that combines
            </span>
            <button
              class="
            top-[255px] absolute rounded-[10px] px-[62px] py-[12px]
            bg-white text-[#0B7077]
            font-raleway font-[500] text-[15px] leading-none text-center
            shadow-[0px_10px_60px_0px_#262D7614]
            transition-all ease-in-out duration-500
            group-hover:bg-[#FD661F] group-hover:text-white group-hover:px-[40px]
            group-hover:hover:bg-white group-hover:hover:text-[#0B7077] group-hover:hover:border group-hover:hover:border-[#0B7077]">
              <span class="hidden group-hover:block">Explore courses</span>
              <span class="block group-hover:hidden">more</span>
            </button>
          </div>

          <!-- Card 4: Nutrition -->
          <div
            class="relative h-[329px] group bg-white px-[15px] transition-shadow duration-500 flex flex-col items-center rounded-[15px] hover:shadow-[0px_50px_80px_0px_#0000000D]">
            <span class="relative inline-block mt-[30px] rounded-full size-[50px] bg-[#CAC9FF]">
              <img :src="nutrition"
                class="absolute size-[50px] object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </span>
            <span class="mt-[24px] font-raleway font-[600] text-[27px] leading-none text-[#0B7077]">Nutrition</span>
            <span
              class="text-center mt-[23px] mb-[112px] w-[260px] font-raleway font-[500] text-[18px] leading-[29px] text-[#696984]">
              One powerful online software suite that combines
            </span>
            <button
              class="
            top-[255px] absolute rounded-[10px] px-[62px] py-[12px]
            bg-white text-[#0B7077]
            font-raleway font-[500] text-[15px] leading-none text-center
            shadow-[0px_10px_60px_0px_#262D7614]
            transition-all ease-in-out duration-500
            group-hover:bg-[#FD661F] group-hover:text-white group-hover:px-[40px]
            group-hover:hover:bg-white group-hover:hover:text-[#0B7077] group-hover:hover:border group-hover:hover:border-[#0B7077]">
              <span class="hidden group-hover:block">Explore courses</span>
              <span class="block group-hover:hidden">more</span>
            </button>
          </div>

        </div>
      </div>
      <button type="button"
        class="w-fit rounded-[10px] transition duration-500 border px-[62px] py-[12px] hover:text-white hover:bg-[#0B7077] bg-white border-[#0B7077] shadow-[0px_10px_60px_0px_#262D7614] font-raleway font-[500] text-[15px] leading-none  text-center text-[#0B7077]">view
        all</button>
    </div>

    <!-- Student ID Card Benefit Section -->
    <div class="mx-[49.3px] flex gap-[39px]">
      <!-- Text Content -->
      <div class="flex flex-col gap-[44px]">
        <div class="gap-[24px] flex flex-col">
          <span
            class="rounded-[10px] px-[25px] py-[10px] bg-[#F5F5F5] font-raleway font-[500] text-[18px] leading-none tracking-[0.02em] w-fit h-fit text-[#0B7077]">Benefits</span>
          <h1 class="font-inter font-[700] text-[48px] text-[#0B7077] leading-[62.4px] tracking-[-0.06em] w-fit h-fit">Get
            Student ID card</h1>
        </div>
        <!-- List of Features -->
        <div class="flex flex-col gap-[40px]">
          <div class="flex gap-[32px]">
            <span class="my-[2px] size-[60px] bg-[#FBFBFB] shadow-[0px_15px_44px_0px_#0D0F1C1F] rounded-full">
              <img :src="grid" alt="Grid icon" class="my-[19px] mx-[17px]" />
            </span>
            <span
              class="font-raleway font-[500] text-[18px] leading-[1.8] tracking-[0.02em] text-[#696984] w-[443px] h-[64px] ">Teachers
              don’t get lost in the grid view and have a dedicated Podium space.</span>
          </div>
          <div class="flex gap-[32px]">
            <span class="my-[2px] size-[60px] bg-[#FBFBFB] shadow-[0px_15px_44px_0px_#0D0F1C1F] rounded-full">
              <img :src="slides" alt="Slides icon" class="my-[19px] mx-[17px]" />
            </span>
            <span
              class="font-raleway font-[500] text-[18px] leading-[1.8] tracking-[0.02em] text-[#696984] w-[443px] h-[64px] ">TA’s
              and presenters can be moved to the front of the class.</span>
          </div>
          <div class="flex gap-[32px]">
            <span class="my-[2px] size-[60px] bg-[#FBFBFB] shadow-[0px_15px_44px_0px_#0D0F1C1F] rounded-full">
              <img :src="teachers" alt="Teachers icon" class="my-[19px] mx-[17px]" />
            </span>
            <span
              class="font-raleway font-[500] text-[18px] leading-[1.8] tracking-[0.02em] text-[#696984] w-[443px] h-[64px] ">Teachers
              can easily see all students and class data at one time.</span>
          </div>
        </div>
      </div>
      <!-- Visual Content: ID Card Images -->
      <div class="my-[12.7px] rounded-[20px] px-[75px] py-[37px] bg-[#D2E6E4] gap-[10px] flex flex-shrink-0 max-w-full">
        <img :src="id_front" alt="Student ID Card front page" class="w-[211.6px] h-[344.6px]" />
        <img :src="id_back" alt="Student ID Card back page" class="w-[211.6px] h-[344.6px]" />
      </div>
    </div>

    <!-- Staff Training Section -->
    <div class="mx-[50.21px] flex gap-[94px]">
      <img :src="pana" alt="Team Meeting Visual" class="mt-[91.59px]">
      <!-- Text Content -->
      <div class="flex flex-col gap-[44px]">
        <div class="gap-[24px] flex flex-col">
          <span
            class="rounded-[10px] px-[25px] py-[10px] bg-[#D4E1FF] font-raleway font-[500] text-[#0B7077] text-[18px] leading-none tracking-[0.02em] w-fit h-fit">Training</span>
          <h1 class="font-inter font-[700] text-[48px] text-[#FD661F] leading-[62.4px] tracking-[-0.06em] w-fit h-fit">
            Staff
            training</h1>
        </div>
        <!-- List of Features -->
        <div class="flex flex-col gap-[40px]">
          <div class="flex gap-[32px]">
            <span class="my-[2px] size-[60px] bg-[#FBFBFB] shadow-[0px_15px_44px_0px_#0D0F1C1F] rounded-full">
              <img :src="grid" alt="Grid icon" class="my-[19px] mx-[17px]" />
            </span>
            <span
              class="font-raleway font-[500] text-[18px] leading-[1.8] tracking-[0.02em] text-[#696984] w-[443px] h-[64px] ">Teachers
              don’t get lost in the grid view and have a dedicated Podium space.</span>
          </div>
          <div class="flex gap-[32px]">
            <span class="my-[2px] size-[60px] bg-[#FBFBFB] shadow-[0px_15px_44px_0px_#0D0F1C1F] rounded-full">
              <img :src="slides" alt="Slides icon" class="my-[19px] mx-[17px]" />
            </span>
            <span
              class="font-raleway font-[500] text-[18px] leading-[1.8] tracking-[0.02em] text-[#696984] w-[443px] h-[64px] ">TA’s
              and presenters can be moved to the front of the class.</span>
          </div>
          <div class="flex gap-[32px]">
            <span class="my-[2px] size-[60px] bg-[#FBFBFB] shadow-[0px_15px_44px_0px_#0D0F1C1F] rounded-full">
              <img :src="teachers" alt="Teachers icon" class="my-[19px] mx-[17px]" />
            </span>
            <span
              class="font-raleway font-[500] text-[18px] leading-[1.8] tracking-[0.02em] text-[#696984] w-[443px] h-[64px] ">Teachers
              can easily see all students and class data at one time.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Gift Cards Promotional Section -->
    <div class="mx-[33px] overflow-hidden h-[542px] w-full">
      <img :src="giftcards" alt="Giftcards Visual" class="absolute ml-[521px] z-10">
      <div
        class="mx-[33px] mt-[141px] px-[59px] py-[29px] flex flex-col w-auto h-[401px] bg-[#DF1C25] z-0 rounded-[16px]">
        <h1
          class="h-[141.2px] font-[700] mt-[22.1px] font-inter text-[48px] leading-[62.4px] tracking-[-0.06em] text-white ">
          Why You should buy<br>gift cards ?</h1>
        <ul class="mt-[10.7px] gap-[9px] flex flex-col">
          <li class="flex gap-[5px] ">
            <img :src="star_outline" class="size-[20px]" />
            <span class="font-raleway text-white font-[500] text-[14px] leading-[1.2] tracking-wide">Teachers don’t get
              lost in the grid view and have a dedicated Podium space.</span>
          </li>
          <li class="flex gap-[5px] ">
            <img :src="star_outline" class="size-[20px]" />
            <span class="font-raleway text-white font-[500] text-[14px] leading-[1.2] tracking-wide">Teachers don’t get
              lost in the grid view and have a dedicated Podium space.</span>
          </li>
          <li class="flex gap-[5px] ">
            <img :src="star_outline" class="size-[20px]" />
            <span class="font-raleway text-white font-[500] text-[14px] leading-[1.2] tracking-wide">Teachers don’t get
              lost in the grid view and have a dedicated Podium space.</span>
          </li>
        </ul>
        <button type="button"
          class="hover:text-white hover:bg-[#0B7077] transition-all ease-in-out duration-500 mt-[30px] px-[30px] py-[15px] rounded-[10px] w-fit h-fit bg-white font-raleway font-[500] text-[16px] leading-none tracking-wide text-[#0B7077]">BUY
          NOW</button>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- FOOTER SECTION -->
  <!-- Contains contact info, links, and newsletter subscription. -->
  <!-- ========================================================================= -->
  <footer class="footer h-fit overflow-hidden">
    <div class="main relative w-full h-[447.38px]">
      <!-- Contact and Brand Information -->
      <div class="flex flex-col gap-[28px] absolute left-[144px] top-[105px] bottom-[69.69px]">
        <div class="logo flex items-center lg:gap-[15px] w-full h-fit text-left">
          <img :src="logo" alt="Onlearn Logo" class="lg:h-[37.69px] w-[62.42px]" />
          <span
            class="font-extrabold text-left font-picoblackal not-italic text-[30px] leading-[100%]  w-full text-[#0B7077]">
            Onlearn
          </span>
        </div>
        <!-- Contact Details List -->
        <div class="flex flex-col gap-[17px]">
          <div class="flex flex-col">
            <div class="flex flex-col">
              <div class="flex gap-[12px]">
                <img :src="Location" alt="Location">
                <span
                  class="w-[56px] h-[26px] text-[#0B7077] font-iranyekan font-[700] text-[14px]  leading-[26px]">Address:</span>
              </div>
              <p class="w-[279px] h-[52px] text-[#0B7077] font-raleway font-[500] text-[14px] leading-[26px] ">
                Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div></div>
          </div>
          <div class="flex gap-[12px]">
            <img :src="Calling" alt="Calling">
            <span class="w-[237.73px] h-[26px] text-[#0B7077] font-raleway font-[500] text-[14px] leading-[26px] ">Tel
              :+9229341037</span>
          </div>
          <div class="flex gap-[12px]">
            <img :src="Time" alt="Time">
            <span
              class="w-[237.73px] h-[26px] text-[#0B7077] font-raleway font-[500] text-[14px] leading-[26px] ">Response
              hours: 8 to 20</span>
          </div>
          <div class="flex gap-[12px]">
            <img :src="Message" alt="Message">
            <span class="w-[237.73px] h-[26px] text-[#0B7077] font-raleway font-[500] text-[14px] leading-[26px] ">Email:
              info@onlearn.com</span>
          </div>
        </div>
      </div>

      <!-- Footer Navigation Links -->
      <div class="flex gap-[56px] absolute left-[556px] top-[134px]">
        <!-- Categories Links -->
        <div class="flex flex-col gap-[29px] w-[155px] h-[171px]">
          <span
            class="w-[79px] h-[18px] font-raleway font-[700] text-[15px] leading-[100%]  text-[#0A033C]">Categories</span>
          <ul class="flex flex-col gap-[20px]">
            <li class="w-[74px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%]  text-[#0B7077]">
              Counseling</li>
            <li class="w-[118px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%]  text-[#0B7077]">
              Health
              and fitness</li>
            <li class="w-[155px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%]  text-[#0B7077]">
              Individual
              development</li>
            <li class="w-[35px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%]  text-[#0B7077]">
              more</li>
          </ul>
        </div>
        <!-- General Links -->
        <div class="flex flex-col gap-[29px] w-[59px] h-[99px]">
          <span class="w-[79px] h-[18px] font-raleway font-[700] text-[15px] leading-[100%]  text-[#0A033C]">Links</span>
          <ul class="flex flex-col gap-[20px]">
            <li class="w-[59px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%]  text-[#0B7077]">
              About
              us</li>
            <li class="w-[30px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%]  text-[#0B7077]">
              blog</li>
          </ul>
        </div>
      </div>

      <!-- Newsletter Subscription Form -->
      <div class="flex flex-col gap-[20px] absolute left-[880px] top-[152px]">
        <span class="w-full text-center h-[18px] font-raleway font-[400] text-[15px] text-[#0A033C] leading-[100%] ">
          Stay up to date with the latest courses
        </span>
        <div
          class="flex h-[73.68px] w-fit rounded-[15px] bg-white shadow-[0px_10px_60px_0px_#262D7614] px-[11.14px] py-[9.84px]">
          <input type="email" name="Email" placeholder="Email" id="e_mail"
            class="py-[13px] px-[11px] border-none outline-none font-iranyekan placeholder:font-iranyekan w-[264px] placeholder:text-[#0B7077] placeholder:font-[400] placeholder:text-[16px] placeholder:leading-[30px] placeholder: placeholder:opacity-[0.5] text-[#0B7077] font-[400] text-[16px] leading-[30px] ">
          <button type="submit"
            class=" rounded-[20px] px-[50px] py-[13px] bg-[#0B7077] font-iranyekan font-[500] text-[16px] leading-[100%]  text-white">Send</button>
        </div>
      </div>
    </div>
    <!-- Decorative lines for the footer background -->
    <div class="relative opacity-[0.6] z-[15]">
      <img :src="bottom_lines1" class="absolute left-[952.25px] bottom-0" />
      <img :src="bottom_lines2" class="absolute left-[910.13px] bottom-0" />
      <img :src="bottom_lines3" class="absolute left-[991.68px] bottom-0" />
      <img :src="bottom_lines4" class="absolute left-[920.47px] bottom-0" />
      <img :src="bottom_lines5" class="absolute left-[936.9px] bottom-0" />
      <img :src="bottom_lines6" class="absolute left-[927.77px] bottom-0" />
      <img :src="bottom_lines7" class="absolute left-[903.82px] bottom-0" />
      <img :src="bottom_lines8" class="absolute left-[917.23px] bottom-0" />
    </div>
  </footer>
</template>

<style>
/**
 * Custom styles for the Onlearn landing page component.
 * These styles handle specific visual effects not easily achieved with Tailwind CSS utility classes.
 */

/* Debugging helper: Uncomment to visualize the layout of all elements. */
/* 
* {
  border: 0.2px solid red;
} 
*/

/**
 * Sets a background image for the footer.
 * The image is positioned at the bottom and covers the entire footer area without repeating.
 */
.footer {
  background: url("~/assets/images/footer_bgimg.png") no-repeat bottom/cover;
}

/**
 * Ensures that all direct children of the footer's main content area
 * appear above the decorative background lines.
 */
.footer .main>* {
  z-index: 30;
}

/**
 * Custom styling for the star rating component.
 */
.star {
  position: relative;
  width: 17.4px;
  height: 16.55px;
  /* The background is the empty star icon. */
  background: url("~/assets/icons/star.svg") no-repeat center/contain;
}

/**
 * The filled part of the star.
 * A CSS mask is used to clip the background color into the shape of the filled star icon.
 * This allows for easy coloring and dynamic filling (e.g., half-stars).
 */
.star-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #161618;
  /* Color of the filled star */
  -webkit-mask: url("~/assets/icons/star_filled.svg") no-repeat center/contain;
  mask: url("~/assets/icons/star_filled.svg") no-repeat center/contain;
}

/**
 * Modifier class for a half-filled star.
 * A linear gradient is used as the background, creating a sharp color stop at 50%
 * to give the appearance of a half-filled star.
 */
.half {
  background: linear-gradient(to right, #161618 50%, transparent 50%);
}
</style>