<script setup>
import { ref } from 'vue';

/**
 * @file This Vue component renders a fully responsive landing page for the "Onlearn" online learning platform.
 * @description It includes a hero section, course categories, feature highlights, a promotional section for gift cards, and a comprehensive footer, all optimized for various screen sizes.
 * @author [Your Name/Team Name]
 * @version 2.1.0
 */

// State for controlling the mobile menu's visibility.
const isMenuOpen = ref(false);

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
  <title>Onlearn - Online Courses</title>
  <!-- ========================================================================= -->
  <!-- HERO SECTION -->
  <!-- The main landing view with navigation, headline, and call-to-action. -->
  <!-- ========================================================================= -->
  <section class="relative bg-[#D2E6E4] min-h-screen rounded-b-[50px] overflow-hidden flex flex-col">
    <!-- Decorative background lines for visual flair (hidden on smaller screens) -->
    <div class="absolute inset-0 opacity-[0.6] z-0 hidden lg:block">
      <img :src="top_lines1" class="absolute left-[165.28px]" />
      <img :src="top_lines2" class="absolute left-[123.15px]" />
      <img :src="top_lines3" class="absolute left-[204.7px]" />
      <img :src="top_lines4" class="absolute left-[133.49px]" />
      <img :src="top_lines5" class="absolute left-[149.93px]" />
      <img :src="top_lines6" class="absolute left-[140.8px]" />
      <img :src="top_lines7" class="absolute left-[116.86px]" />
      <img :src="top_lines8" class="absolute left-[130.25px]" />
      <img :src="line1" alt="line 1" class="absolute z-[0] bottom-[339.33px] left-[171.12px] ">
      <img :src="line2" alt="line 2" class="absolute z-[0] left-[219.16px] bottom-[260px]">
      <img :src="line3" alt="line 3" class="absolute z-[0] bottom-[413.72px] left-[526.16px] ">
    </div>

    <!-- Header: Contains the logo, navigation links, and authentication buttons. -->
    <header class="relative z-30 w-full px-4 sm:px-8 lg:px-20 py-8">
      <div class="flex justify-between items-center max-w-screen-xl mx-auto">
        <!-- Logo -->
        <div class="logo flex items-center gap-2 lg:gap-4 flex-shrink-0">
          <img :src="logo" alt="Logo" class="h-8 lg:h-10 w-auto" />
          <span class="font-extrabold font-picoblackal text-2xl lg:text-3xl text-[#0B7077]">
            Onlearn
          </span>
        </div>

        <!-- Desktop Navigation & Auth -->
        <div class="hidden lg:flex items-center gap-10">
          <nav class="flex h-fit gap-10 xl:gap-20">
            <NuxtLink to="/" class="h-fit text-[#FD661F] font-raleway font-bold text-lg leading-none tracking-wide">Home
            </NuxtLink>
            <NuxtLink to="/careers" class="h-fit text-[#252641] font-raleway font-medium text-lg leading-none tracking-wide">Careers
            </NuxtLink>
            <NuxtLink to="/blog" class="h-fit text-[#252641] font-raleway font-medium text-lg leading-none tracking-wide">Blog
            </NuxtLink>
            <NuxtLink to="/about" class="h-fit text-[#252641] font-raleway font-medium text-lg leading-none tracking-wide">About Us
            </NuxtLink>
          </nav>
          <div class="flex items-center gap-4">
            <button type="button" class="btn-primary btn-outline">
              LOG IN
            </button>
            <button type="button" class="btn-primary btn-filled">
              SIGN UP
            </button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="text-[#0B7077] focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="lg:hidden mt-4 bg-white/80 backdrop-blur-md rounded-lg p-6 space-y-4">
        <nav class="flex flex-col items-center gap-4">
          <NuxtLink to="/" class="text-[#FD661F] font-bold text-lg">Home</NuxtLink>
          <NuxtLink to="/careers" class="text-[#252641] font-medium text-lg">Careers</NuxtLink>
          <NuxtLink to="/blog" class="text-[#252641] font-medium text-lg">Blog</NuxtLink>
          <NuxtLink to="/about" class="text-[#252641] font-medium text-lg">About Us</NuxtLink>
        </nav>
        <div class="flex flex-col items-center gap-4 pt-4 border-t">
          <button type="button" class="btn-primary btn-outline w-full">LOG IN</button>
          <button type="button" class="btn-primary btn-filled w-full">SIGN UP</button>
        </div>
      </div>
    </header>

    <!-- Hero Body -->
    <main class="relative flex-grow flex items-center px-4 sm:px-8 lg:px-20">
      <div class="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 z-10">
        <!-- Hero Content -->
        <div class="text-center lg:text-left order-2 lg:order-1 relative pb-20 lg:pb-0">
          <span class="bg-white w-fit rounded-md font-raleway font-medium text-base md:text-lg text-[#252641] py-2 px-5">
            Never stop learning
          </span>
          <h1 class="mt-4 font-raleway text-4xl md:text-5xl lg:text-[64px] font-bold lg:leading-[75px] text-[#0B7077]">
            Grow up your skills by online courses with Onlearning
          </h1>

          <!-- Call to Action & Social Proof -->
          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button class="btn-primary bg-[#FD661F] text-white hover:bg-opacity-90">
              EXPLORE PATH
            </button>
            <div class="flex items-center gap-2">
              <div class="flex -space-x-4">
                <img :src="reviewer1" alt="Reviewer profile 1" class="size-12 md:size-14 border-2 border-white rounded-full" />
                <img :src="reviewer2" alt="Reviewer profile 2" class="size-12 md:size-14 border-2 border-white rounded-full" />
                <img :src="reviewer3" alt="Reviewer profile 3" class="size-12 md:size-14 border-2 border-white rounded-full" />
              </div>
              <div>
                <div class="flex gap-1">
                  <div v-for="i in 5" :key="i" class="star">
                    <div class="star-fill" :class="{'half': i === 5}"></div>
                  </div>
                </div>
                <span class="font-raleway font-semibold text-sm text-[#230F0F]">
                  (10k+ Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Student Illustration & Floating Cards -->
        <div class="relative order-1 lg:order-2 flex justify-center items-center">
          <img :src="student" alt="Student illustration" class="max-w-full h-auto md:max-w-lg lg:max-w-none lg:h-auto" />
          <div class="absolute flex gap-4 items-center px-6 py-3 -bottom-8 sm:bottom-10 lg:bottom-auto lg:top-1/2 lg:-left-20 h-fit rounded-2xl bg-white/80 backdrop-blur-lg z-20 shadow-lg">
            <div class="size-12 p-3 bg-[#23BDEE] rounded-lg flex items-center justify-center">
              <img :src="calendar" alt="calendar" class="w-full h-full" />
            </div>
            <div class="flex flex-col">
              <span class="font-bold font-nunito text-2xl text-[#595959]">250k</span>
              <span class="font-semibold -mt-2 font-nunito text-lg text-[#545567]">Assisted Student</span>
            </div>
          </div>
          <div class="absolute top-10 right-0 sm:right-10 lg:bottom-20 lg:right-5 size-16 rounded-xl bg-[#FD661F] shadow-lg p-3 z-20">
            <img :src="chart" alt="chart" class="w-full h-full" />
          </div>
        </div>
      </div>
    </main>
  </section>

  <!-- ========================================================================= -->
  <!-- MAIN CONTENT SECTION -->
  <!-- Contains all sections below the hero. -->
  <!-- ========================================================================= -->
  <section class="py-20 lg:py-32 px-4 sm:px-8 lg:px-20 space-y-20 lg:space-y-32">

    <!-- Popular Courses Section -->
    <div class="flex flex-col w-full justify-center gap-10 lg:gap-16 max-w-screen-xl mx-auto">
      <div class="flex flex-col gap-8 text-center items-center relative">
        <h1 class="font-inter font-bold text-4xl lg:text-5xl text-[#FD661F] tracking-tighter">Popular Courses</h1>
        <div class="flex flex-wrap justify-center gap-3 sm:gap-6">
          <button type="button" class="btn-filter-active">All Programme</button>
          <button type="button" class="btn-filter">Ui/Ux Design</button>
          <button type="button" class="btn-filter">Program Design</button>
          <button type="button" class="btn-filter">Marketing</button>
          <button type="button" class="btn-filter">Finance</button>
          <button type="button" class="btn-filter">Science</button>
        </div>
        <img :src="vector1" class="absolute top-10 right-1/4 hidden lg:block" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <!-- Course Card 1 -->
        <div class="course-card">
          <img :src="pmbc" class="w-full h-48 object-cover" />
          <div class="p-4 flex flex-col flex-grow">
            <div class="student-avatars">
              <div class="flex -space-x-2 h-fit object-contain">
                <img :src="blink" class="size-8 rounded-full border-2 border-white" />
                <img :src="ander" class="size-8 rounded-full border-2 border-white" />
                <img :src="bird" class="size-8 rounded-full border-2 border-white" />
                <img :src="bartender" class="size-8 rounded-full border-2 border-white" />
              </div>
              <span class="font-raleway text-sm text-[#263238]">+40 students</span>
            </div>
            <div class="mt-4 flex flex-col flex-grow">
              <span class="font-raleway text-xs text-[#777795]">1 - 28 July 2022</span>
              <span class="font-raleway font-extrabold text-base text-[#0B7077] mt-1">Product Management Basic - Course</span>
              <span class="font-raleway text-xs text-[#4D4D4D] mt-2 flex-grow">Product Management Masterclass, you will learn with Sarah Johnson.</span>
            </div>
          </div>
          <div class="p-4 border-t flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-[#FD661F] font-inter font-bold text-lg">$123</span>
              <span class="font-inter text-sm text-gray-400 line-through">$500</span>
            </div>
            <button class="btn-enroll">Enroll Now</button>
          </div>
        </div>

        <!-- Course Card 2 -->
        <div class="course-card">
          <img :src="bdspc" class="w-full h-48 object-cover" />
          <div class="p-4 flex flex-col flex-grow">
            <div class="student-avatars">
               <div class="flex -space-x-2 h-fit object-contain">
                <img :src="blink" class="size-8 rounded-full border-2 border-white" />
                <img :src="ander" class="size-8 rounded-full border-2 border-white" />
              </div>
              <span class="font-raleway text-sm text-[#263238]">+11 students</span>
            </div>
            <div class="mt-4 flex flex-col flex-grow">
              <span class="font-raleway text-xs text-[#777795]">1 - 28 July 2022</span>
              <span class="font-raleway font-extrabold text-base text-[#0B7077] mt-1">BM Data Science Professional Certificate</span>
              <span class="font-raleway text-xs text-[#4D4D4D] mt-2 flex-grow">Product Management Masterclass, you will learn with Sarah Johnson.</span>
            </div>
          </div>
          <div class="p-4 border-t flex items-center justify-between">
             <div class="flex items-center gap-2">
              <span class="text-[#FD661F] font-inter font-bold text-lg">$123</span>
              <span class="font-inter text-sm text-gray-400 line-through">$500</span>
            </div>
            <button class="btn-enroll">Enroll Now</button>
          </div>
        </div>

        <!-- Course Card 3 -->
        <div class="course-card">
          <img :src="tsowb" class="w-full h-48 object-cover" />
          <div class="p-4 flex flex-col flex-grow">
            <div class="student-avatars">
               <div class="flex -space-x-2 h-fit object-contain">
                <img :src="blink" class="size-8 rounded-full border-2 border-white" />
                <img :src="ander" class="size-8 rounded-full border-2 border-white" />
                <img :src="bird" class="size-8 rounded-full border-2 border-white" />
              </div>
              <span class="font-raleway text-sm text-[#263238]">+234 students</span>
            </div>
            <div class="mt-4 flex flex-col flex-grow">
              <span class="font-raleway text-xs text-[#777795]">1 - 28 July 2022</span>
              <span class="font-raleway font-extrabold text-base text-[#0B7077] mt-1">The Science of Well-Being</span>
              <span class="font-raleway text-xs text-[#4D4D4D] mt-2 flex-grow">Product Management Masterclass, you will learn with Sarah Johnson.</span>
            </div>
          </div>
          <div class="p-4 border-t flex items-center justify-between">
             <div class="flex items-center gap-2">
              <span class="text-[#FD661F] font-inter font-bold text-lg">$123</span>
              <span class="font-inter text-sm text-gray-400 line-through">$500</span>
            </div>
            <button class="btn-enroll">Enroll Now</button>
          </div>
        </div>

        <!-- Course Card 4 -->
        <div class="course-card">
          <img :src="pfes" class="w-full h-48 object-cover" />
          <div class="p-4 flex flex-col flex-grow">
            <div class="student-avatars">
              <div class="flex -space-x-2 h-fit object-contain">
                <img :src="blink" class="size-8 rounded-full border-2 border-white" />
                <img :src="ander" class="size-8 rounded-full border-2 border-white" />
                <img :src="bird" class="size-8 rounded-full border-2 border-white" />
                 <img :src="bartender" class="size-8 rounded-full border-2 border-white" />
              </div>
              <span class="font-raleway text-sm text-[#263238]">+342 students</span>
            </div>
            <div class="mt-4 flex flex-col flex-grow">
              <span class="font-raleway text-xs text-[#777795]">1 - 28 July 2022</span>
              <span class="font-raleway font-extrabold text-base text-[#0B7077] mt-1">Python for Everybody Specialization</span>
              <span class="font-raleway text-xs text-[#4D4D4D] mt-2 flex-grow">Product Management Masterclass, you will learn with Sarah Johnson.</span>
            </div>
          </div>
          <div class="p-4 border-t flex items-center justify-between">
             <div class="flex items-center gap-2">
              <span class="text-[#FD661F] font-inter font-bold text-lg">$123</span>
              <span class="font-inter text-sm text-gray-400 line-through">$500</span>
            </div>
            <button class="btn-enroll">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Course Category Section -->
    <div class="flex flex-col gap-12 lg:gap-20 items-center max-w-screen-xl mx-auto">
      <div class="flex flex-col gap-8 text-center items-center relative">
        <h1 class="font-inter font-bold text-4xl lg:text-5xl text-[#0B7077] tracking-tighter">Courses Category</h1>
        <span class="font-raleway max-w-3xl text-lg lg:text-xl text-[#696984]">Onlearing is one powerful online software suite that combines all the tools needed to run a successful school or office.</span>
        <img :src="vector2" class="absolute top-10 right-1/4 hidden lg:block" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        <!-- Category Card 1: Beauty -->
        <div class="category-card group">
          <span class="relative inline-block rounded-full size-16 bg-[#A3D3FF] flex items-center justify-center">
            <img :src="beauty" class="size-10 object-contain" />
          </span>
          <span class="mt-6 font-raleway font-semibold text-2xl text-[#0B7077]">Beauty</span>
          <span class="text-center mt-4 w-full max-w-xs font-raleway text-base text-[#696984]">One powerful online software suite that combines</span>
          <button class="category-button">
            <span class="hidden group-hover:block">Explore courses</span>
            <span class="block group-hover:hidden">more</span>
          </button>
        </div>

        <!-- Category Card 2: Medical -->
        <div class="category-card group">
          <span class="relative inline-block rounded-full size-16 bg-[#F1C9FF] flex items-center justify-center">
            <img :src="medical" class="size-12 object-contain" />
          </span>
          <span class="mt-6 font-raleway font-semibold text-2xl text-[#0B7077]">Medical</span>
          <span class="text-center mt-4 w-full max-w-xs font-raleway text-base text-[#696984]">One powerful online software suite that combines</span>
          <button class="category-button">
            <span class="hidden group-hover:block">Explore courses</span>
            <span class="block group-hover:hidden">more</span>
          </button>
        </div>

        <!-- Category Card 3: Sports -->
        <div class="category-card group">
          <span class="relative inline-block rounded-full size-16 bg-[#FFE3AF] flex items-center justify-center">
            <img :src="sports" class="h-12 w-auto object-contain" />
          </span>
          <span class="mt-6 font-raleway font-semibold text-2xl text-[#0B7077]">Sports</span>
          <span class="text-center mt-4 w-full max-w-xs font-raleway text-base text-[#696984]">One powerful online software suite that combines</span>
          <button class="category-button">
            <span class="hidden group-hover:block">Explore courses</span>
            <span class="block group-hover:hidden">more</span>
          </button>
        </div>

        <!-- Category Card 4: Nutrition -->
        <div class="category-card group">
          <span class="relative inline-block rounded-full size-16 bg-[#CAC9FF] flex items-center justify-center">
            <img :src="nutrition" class="size-10 object-contain" />
          </span>
          <span class="mt-6 font-raleway font-semibold text-2xl text-[#0B7077]">Nutrition</span>
          <span class="text-center mt-4 w-full max-w-xs font-raleway text-base text-[#696984]">One powerful online software suite that combines</span>
          <button class="category-button">
            <span class="hidden group-hover:block">Explore courses</span>
            <span class="block group-hover:hidden">more</span>
          </button>
        </div>
      </div>
      <button type="button" class="btn-outline-primary-big">View All</button>
    </div>

    <!-- Feature Section (e.g., Student ID Card) -->
    <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-screen-xl mx-auto">
      <div class="flex-1 space-y-8 text-center lg:text-left">
        <div class="space-y-4">
          <span class="rounded-lg px-5 py-2 bg-[#F5F5F5] font-raleway font-medium text-lg tracking-wide text-[#0B7077]">Benefits</span>
          <h1 class="font-inter font-bold text-4xl lg:text-5xl text-[#0B7077] tracking-tighter">Get Student ID card</h1>
        </div>
        <div class="space-y-6">
          <div class="feature-item">
            <span class="feature-icon"><img :src="grid" alt="Grid icon" /></span>
            <span class="feature-text">Teachers don’t get lost in the grid view and have a dedicated Podium space.</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon"><img :src="slides" alt="Slides icon" /></span>
            <span class="feature-text">TA’s and presenters can be moved to the front of the class.</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon"><img :src="teachers" alt="Teachers icon" /></span>
            <span class="feature-text">Teachers can easily see all students and class data at one time.</span>
          </div>
        </div>
      </div>
      <div class="flex-1 w-full flex justify-center p-8 bg-[#D2E6E4] rounded-2xl">
        <div class="flex gap-4 sm:gap-6">
          <img :src="id_front" alt="Student ID Card front page" class="w-1/2 max-w-xs" />
          <img :src="id_back" alt="Student ID Card back page" class="w-1/2 max-w-xs" />
        </div>
      </div>
    </div>

    <!-- Feature Section (e.g., Staff Training) -->
    <div class="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 max-w-screen-xl mx-auto">
      <div class="flex-1 space-y-8 text-center lg:text-left">
        <div class="space-y-4">
          <span class="rounded-lg px-5 py-2 bg-[#D4E1FF] font-raleway font-medium text-lg tracking-wide text-[#0B7077]">Training</span>
          <h1 class="font-inter font-bold text-4xl lg:text-5xl text-[#FD661F] tracking-tighter">Staff training</h1>
        </div>
        <div class="space-y-6">
          <div class="feature-item">
            <span class="feature-icon"><img :src="grid" alt="Grid icon" /></span>
            <span class="feature-text">Teachers don’t get lost in the grid view and have a dedicated Podium space.</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon"><img :src="slides" alt="Slides icon" /></span>
            <span class="feature-text">TA’s and presenters can be moved to the front of the class.</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon"><img :src="teachers" alt="Teachers icon" /></span>
            <span class="feature-text">Teachers can easily see all students and class data at one time.</span>
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-center items-center">
        <img :src="pana" alt="Team Meeting Visual" class="w-full max-w-md">
      </div>
    </div>

    <!-- Gift Cards Promotional Section -->
    <div class="relative bg-[#DF1C25] rounded-2xl p-8 md:p-12 lg:p-16 max-w-screen-xl mx-auto overflow-hidden">
      <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div class="text-white space-y-8">
          <h1 class="font-inter font-bold text-4xl lg:text-5xl tracking-tighter">Why You should buy gift cards?</h1>
          <ul class="space-y-4">
            <li class="flex gap-3 items-start">
              <img :src="star_outline" class="size-5 mt-1 flex-shrink-0" />
              <span class="font-raleway text-base">Teachers don’t get lost in the grid view and have a dedicated Podium space.</span>
            </li>
            <li class="flex gap-3 items-start">
              <img :src="star_outline" class="size-5 mt-1 flex-shrink-0" />
              <span class="font-raleway text-base">TA’s and presenters can be moved to the front of the class.</span>
            </li>
            <li class="flex gap-3 items-start">
              <img :src="star_outline" class="size-5 mt-1 flex-shrink-0" />
              <span class="font-raleway text-base">Teachers can easily see all students and class data at one time.</span>
            </li>
          </ul>
          <button type="button" class="bg-white text-[#0B7077] hover:bg-gray-200 transition-colors px-8 py-4 rounded-lg font-raleway font-semibold text-base tracking-wide">
            BUY NOW
          </button>
        </div>
        <div class="hidden lg:flex justify-center">
            <img :src="giftcards" alt="Giftcards Visual" class="w-full max-w-lg">
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================= -->
  <!-- FOOTER SECTION -->
  <!-- Contains contact info, links, and newsletter subscription. -->
  <!-- ========================================================================= -->
  <footer class="footer relative overflow-hidden pt-20">
    <div class="relative z-20 container mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-[#0B7077]">
        <!-- Contact and Brand Information -->
        <div class="space-y-6">
          <div class="logo flex items-center gap-4">
            <img :src="logo" alt="Onlearn Logo" class="h-10 w-auto" />
            <span class="font-extrabold font-picoblackal text-3xl text-[#0B7077]">Onlearn</span>
          </div>
          <div class="space-y-4 font-raleway font-medium text-sm">
            <div class="flex items-start gap-3">
              <img :src="Location" alt="Location" class="mt-1">
              <div>
                <span class="font-bold">Address:</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <img :src="Calling" alt="Calling">
              <span>Tel: +9229341037</span>
            </div>
            <div class="flex items-center gap-3">
              <img :src="Time" alt="Time">
              <span>Response hours: 8 to 20</span>
            </div>
            <div class="flex items-center gap-3">
              <img :src="Message" alt="Message">
              <span>Email: info@onlearn.com</span>
            </div>
          </div>
        </div>

        <!-- Categories Links -->
        <div class="space-y-6">
          <h3 class="font-raleway font-bold text-lg text-[#0A033C]">Categories</h3>
          <ul class="space-y-3 font-raleway font-medium text-sm">
            <li><a href="#" class="hover:text-[#FD661F]">Counseling</a></li>
            <li><a href="#" class="hover:text-[#FD661F]">Health and fitness</a></li>
            <li><a href="#" class="hover:text-[#FD661F]">Individual development</a></li>
            <li><a href="#" class="hover:text-[#FD661F]">More</a></li>
          </ul>
        </div>

        <!-- General Links -->
        <div class="space-y-6">
          <h3 class="font-raleway font-bold text-lg text-[#0A033C]">Links</h3>
          <ul class="space-y-3 font-raleway font-medium text-sm">
            <li><a href="#" class="hover:text-[#FD661F]">About us</a></li>
            <li><a href="#" class="hover:text-[#FD661F]">Blog</a></li>
            <li><a href="#" class="hover:text-[#FD661F]">Careers</a></li>
          </ul>
        </div>

        <!-- Newsletter Subscription Form -->
        <div class="space-y-4">
          <h3 class="font-raleway font-medium text-base text-center lg:text-left text-[#0A033C]">Stay up to date with the latest courses</h3>
          <div class="flex flex-col sm:flex-row h-fit w-full rounded-lg bg-white shadow-lg p-2 gap-2">
            <input type="email" name="Email" placeholder="Your Email" class="w-full py-3 px-4 outline-none text-[#0B7077] placeholder:text-[#0B7077]/50">
            <button type="submit" class="w-full sm:w-auto rounded-lg px-8 py-3 bg-[#0B7077] font-medium text-base text-white hover:bg-opacity-90">
              Send
            </button>
          </div>
        </div>
      </div>
      <div class="text-center text-sm text-[#0B7077] py-8 mt-12 border-t border-[#0B7077]/20">
        © 2025 Onlearn. All Rights Reserved.
      </div>
    </div>
    
    <!-- Decorative lines for the footer background (hidden on smaller screens) -->
    <div class="absolute bottom-0 right-0 opacity-60 z-10 hidden lg:block">
      <img :src="bottom_lines1" class="absolute right-[215px] bottom-0" />
      <img :src="bottom_lines2" class="absolute right-[257px] bottom-0" />
      <img :src="bottom_lines3" class="absolute right-[176px] bottom-0" />
      <img :src="bottom_lines4" class="absolute right-[247px] bottom-0" />
      <img :src="bottom_lines5" class="absolute right-[231px] bottom-0" />
      <img :src="bottom_lines6" class="absolute right-[240px] bottom-0" />
      <img :src="bottom_lines7" class="absolute right-[264px] bottom-0" />
      <img :src="bottom_lines8" class="absolute right-[250px] bottom-0" />
    </div>
  </footer>
</template>

<style>
/**
 * Custom and utility styles for the Onlearn landing page component.
 */

/* Sets a background image for the footer. */
.footer {
  background: url("~/assets/images/footer_bgimg.png") no-repeat bottom/cover;
}

/* === UPDATED BUTTON STYLES === */
.btn-primary {
    @apply font-raleway font-[500] text-[16px] rounded-[10px] px-[40px] py-[20px] w-fit h-fit transition-all duration-300;
}
.btn-outline {
    @apply bg-white text-[#0B7077] border-2 border-transparent hover:bg-transparent hover:border-[#0B7077];
}
.btn-filled {
    @apply bg-[#0B7077] text-white hover:bg-opacity-90;
}
/* ============================= */

.btn-outline-primary-big {
  @apply rounded-lg transition duration-500 border px-12 py-4 hover:text-white hover:bg-[#0B7077] bg-white border-[#0B7077] shadow-lg font-raleway font-medium text-base text-center text-[#0B7077];
}

/* Filter buttons for course section */
.btn-filter {
  @apply rounded-md px-4 py-2 text-[#0B7077] bg-white font-raleway font-medium text-sm leading-none border border-[#C4C4C4] hover:bg-[#0B7077] hover:text-white transition duration-300;
}
.btn-filter-active {
  @apply rounded-md px-4 py-2 bg-[#0B7077] text-white font-raleway font-medium text-sm leading-none;
}

/* Course card styles */
.course-card {
  @apply bg-white flex flex-col w-full min-h-[450px] transition-shadow duration-300 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden;
}
.student-avatars {
  @apply bg-gray-100/80 backdrop-blur-sm absolute items-center top-40 rounded-full left-1/2 -translate-x-1/2 justify-between w-fit px-3 py-1.5 flex gap-2;
}
.btn-enroll {
  @apply rounded-md px-5 py-2 hover:bg-white hover:text-[#0B7077] font-raleway font-medium text-xs leading-none transition duration-300 bg-[#0B7077] text-white hover:border hover:border-[#0B7077];
}

/* Category card styles */
.category-card {
  @apply relative min-h-[330px] bg-white px-4 py-8 transition-shadow duration-300 flex flex-col items-center rounded-2xl shadow-md hover:shadow-xl;
}

.category-button {
  @apply absolute bottom-[-20px] rounded-lg px-16 py-3 bg-white text-[#0B7077] font-raleway font-medium text-base text-center shadow-lg transition-all ease-in-out duration-300 group-hover:bg-[#FD661F] group-hover:text-white group-hover:px-10 group-hover:bottom-6;
}

/* Feature section item styles */
.feature-item {
  @apply flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 lg:gap-8;
}

.feature-icon {
  @apply flex-shrink-0 size-16 bg-[#FBFBFB] shadow-lg rounded-full flex items-center justify-center p-4;
}
.feature-text {
  @apply font-raleway text-lg leading-relaxed text-[#696984];
}

/* Star rating component styles */
.star {
  position: relative;
  width: 17.4px;
  height: 16.55px;
  background: url("~/assets/icons/star.svg") no-repeat center/contain;
}

.star-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #161618; /* Color of the filled star */
  -webkit-mask: url("~/assets/icons/star_filled.svg") no-repeat center/contain;
  mask: url("~/assets/icons/star_filled.svg") no-repeat center/contain;
}

.half {
  background: linear-gradient(to right, #161618 50%, transparent 50%);
}
</style>