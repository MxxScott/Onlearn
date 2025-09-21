<script setup>
import logo from "~/assets/images/logo.png";
import reviewer1 from "~/assets/images/reviewer1.png";
import reviewer2 from "~/assets/images/reviewer2.png";
import reviewer3 from "~/assets/images/reviewer3.png";
import student from "~/assets/images/student.png";
import chart from "~/assets/images/chart.png";
import calendar from "~/assets/images/calendar.png";
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
</script>

<template>
  <section class="relative bg-[#D2E6E4] h-screen w-screen rounded-b-[50px] overflow-hidden">
    <!-- header -->
    <header class="header relative z-[30] grid grid-cols-[auto_auto_auto] px-[82px] py-[43px] items-center">
      <div class="logo flex items-center lg:gap-[15px] lg:ml-[37px] w-[182.42px] h-fit">
        <img :src="logo" alt="Logo" class="lg:h-[37.69px] w-[62.42px]" />
        <span
          class=" w-[105px] font-extrabold font-picoblackal not-italic text-[30px] leading-[100%] tracking-normal text-[#0B7077]">
          Onlearn
        </span>
      </div>

      <nav class="flex h-fit justify-between ml-[136px] mr-[125px] w-[483px]">
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

      <div class="flex justify-between w-[301.58px] h-fit">
        <button type="button" class="btn-primary btn-outline">
          LOG IN
        </button>
        <button type="button" class="btn-primary btn-filled">
          SIGN UP
        </button>
      </div>
    </header>

    <!-- background lines -->
    <!-- <img :src="lines" class="absolute z-[0] top-[-701.42px] left-[69.34px] rotate opacity-[60%]" /> -->
    <img :src="line1" alt="line 1" class="absolute z-[0] top-[377.67px] left-[181.12px] ">
    <img :src="line2" alt="line 2" class="absolute z-[0] top-[446.78px] left-[229.16px] backdrop-hue-rotate-[-2.66deg]">
    <img :src="line3" alt="line 3" class="absolute z-[0] top-[303.28px] left-[536.16px] ">

    <!-- student above lines -->
    <img :src="student" alt="Student illustration" class="absolute h-[623.89px] top-[102.29px] left-[697px] z-[10]" />

    <!-- hero section -->
    <section class="relative z-[20] mt-[61px] px-[80px] flex flex-col">
      <span
        class="bg-white mx-[25px] w-fit h-fit rounded-[10px] font-raleway font-[500] text-[18px] leading-none tracking-wide text-[#252641] py-[10px] px-[25px]">
        Never stop learning
      </span>
      <h1
        class="w-[688px] h-[225px] mx-[25px] my-[15px] font-raleway text-[64px] font-bold leading-[75px] tracking-normal text-[#0B7077]">
        Grow up your skills by online courses with Onlearning
      </h1>

      <div class="py-[13px] px-[25px] flex flex-row">
        <button
          class="bg-[#FD661F] mx-[7px] text-white px-[30px] py-[20px] rounded-[10px] h-fit w-fit font-raleway font-[500] text-[16px] leading-none tracking-[0.02] uppercase">
          EXPLORE PATH
        </button>

        <div class="mx-[5px] flex flex-row h-fit w-fit gap-[8.7px]">
          <div class="flex -space-x-[14.795px] h-fit">
            <img :src="reviewer1" alt="Reviewer profile 1"
              class="w-[52.21px] h-[52.21px] rounded-full border-[#0B7077]" />
            <img :src="reviewer2" alt="Reviewer profile 2"
              class="w-[52.21px] h-[52.21px] rounded-full border-[#0B7077]" />
            <img :src="reviewer3" alt="Reviewer profile 3"
              class="w-[52.21px] h-[52.21px] rounded-full border-[#0B7077]" />
          </div>
          <div class="h-fit">
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
            <span class="font-raleway font-semibold text-[12.18px] leading-[165%] tracking-normal text-[#230F0F]">
              (10k+ Reviews)
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- floating card -->
    <div
      class="absolute flex gap-[32px] items-center px-[28px] py-[15px] top-[442px] left-[720px] w-[300px] h-[100px] rounded-[20px] bg-white opacity-80 backdrop-blur-[20px] z-[20]">
      <div class="size-[50px] p-[11.25px] bg-[#23BDEE] rounded-[8px] text-center items-center">
        <img :src="calendar" alt="calendar" class="size-[27.5px]" />
      </div>
      <div class="flex flex-col">
        <span class="font-[700] h-fit items-center font-nunito text-[24px] leading-[180%] tracking-[0.02] text-[#595959]">
          250k
        </span>
        <span class="font-[600] mt-[-9px] h-fit font-nunito text-[20px] leading-[180%] tracking-[0.02] text-[#545567]">
          Assisted Student
        </span>
      </div>
    </div>

    <!-- chart floating -->
    <div
      class="absolute top-[331px] left-[1250px] size-[69px] rounded-[14px] border bg-[#FD661F] shadow-[0px_8px_40px_0px_#D24D6542] border-[#FD661F] p-[12px] z-[20]">
      <img :src="chart" alt="chart" class="w-[47.3px] h-[44.85px] rounded-[8px]" />
    </div>
  </section>
  <section class="pt-[185px] pb-[245px] px-[80px] gap-[110px] flex flex-col">

  </section>

  <footer class="footer h-fit w-screen">
    <div class="pt-[105px] pl-[144px] h-fit pb-[69.69px] pr-[477.72] flex w-full">
      <div class="flex flex-col gap-[28px]">
        <div class="logo flex items-center lg:gap-[15px] w-full h-fit text-left">
          <img :src="logo" alt="Onlearn Logo" class="lg:h-[37.69px] w-[62.42px]" />
          <span
            class="font-extrabold text-left font-picoblackal not-italic text-[30px] leading-[100%] tracking-[0] w-full text-[#0B7077]">
            Onlearn
          </span>
        </div>
        <div class="flex flex-col gap-[17px]">
          <div class="flex flex-col">
            <div class="flex flex-col">
              <div class="flex gap-[12px]">
                <img :src="Location" alt="Location">
                <span
                  class="w-[56px] h-[26px] text-[#0B7077] font-iranyekan font-[700] text-[14px] tracking-normal leading-[26px] text-right">Address:</span>
              </div>
              <p
                class="w-[279px] h-[52px] text-[#0B7077] font-raleway font-[500] text-[14px] leading-[26px] tracking-normal">
                Lorem ipsum
                dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div></div>
          </div>
          <div class="flex gap-[12px]">
            <img :src="Calling" alt="Calling">
            <span
              class="w-[237.73px] h-[26px] text-[#0B7077] font-raleway font-[500] text-[14px] leading-[26px] tracking-normal">Tel
              :+9229341037</span>
          </div>
          <div class="flex gap-[12px]">
            <img :src="Time" alt="Time">
            <span
              class="w-[237.73px] h-[26px] text-[#0B7077] font-raleway font-[500] text-[14px] leading-[26px] tracking-normal">Response
              hours: 8 to 20</span>
          </div>
          <div class="flex gap-[12px]">
            <img :src="Message" alt="Message">
            <span
              class="w-[237.73px] h-[26px] text-[#0B7077] font-raleway font-[500] text-[14px] leading-[26px] tracking-normal">Email:
              info@onlearn.com</span>
          </div>
        </div>
      </div>


      <div class="flex mt-[29px] ml-[133px] mb-[72.69px] gap-[56px]">
        <div class="flex flex-col gap-[29px] w-[155px] h-[171px]">
          <span
            class="w-[79px] h-[18px] font-raleway font-[700] text-[15px] leading-[100%] tracking-normal text-[#0A033C]">Categories</span>
          <ul class="flex flex-col gap-[20px]">
            <li
              class="w-[74px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%] tracking-normal text-[#0B7077]">
              Counseling</li>
            <li
              class="w-[118px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%] tracking-normal text-[#0B7077]">
              Health
              and fitness</li>
            <li
              class="w-[155px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%] tracking-normal text-[#0B7077]">
              Individual
              development</li>
            <li
              class="w-[35px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%] tracking-normal text-[#0B7077]">
              more</li>
          </ul>
        </div>
        <div class="flex flex-col gap-[29px] w-[59px] h-[99px]">
          <span
            class="w-[79px] h-[18px] font-raleway font-[700] text-[15px] leading-[100%] tracking-normal text-[#0A033C]">Links</span>
          <ul class="flex flex-col gap-[20px]">
            <li
              class="w-[59px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%] tracking-normal text-[#0B7077]">
              About
              us</li>
            <li
              class="w-[30px] h-[16px] font-raleway font-[500] text-[14px] leading-[100%] tracking-normal text-[#0B7077]">
              Blog</li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col mt-[47px] ml-[54px] mb-[41.32px] gap-[20px]">
        <span
          class="w-full text-center h-[18px] font-raleway font-[400] text-[15px] text-[#0A033C] leading-[100%] tracking-normal">Stay
          up to date with the latest courses</span>
        <div
          class="flex h-[73.68px] w-fit rounded-[15px] bg-white shadow-[0px_10px_60px_0px_#262D7614] px-[11.14px] py-[9.84px]">
          <input type="email" name="Email" placeholder="Email" id="e_mail"
            class="py-[13px] px-[11px] border-none outline-none font-iranyekan w-[264px] text-[#0B7077] font-[400] text-[16px] leading-[30px] tracking-normal">
          <button type="submit"
            class=" rounded-[20px] px-[50px] py-[13px] bg-[#0B7077] font-iranyekan font-[500] text-[16px] leading-[100%] tracking-normal text-white">Send</button>
        </div>
      </div>
    </div>
  </footer>
</template>






 
<style>
/* * {
  border: 0.2px solid red;
} */

.footer {
  background: url("~/assets/images/footer_bgimg.png") no-repeat bottom/cover;
}

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
  background: #161618;
  -webkit-mask: url("~/assets/icons/star_filled.svg") no-repeat center/contain;
  mask: url("~/assets/icons/star_filled.svg") no-repeat center/contain;
}

.half {
  background: linear-gradient(to right, #161618 50%, transparent 50%);
}
</style>
