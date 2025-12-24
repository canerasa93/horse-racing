<template>
  <div class="absolute right-[10%] top-6 bottom-6 w-8 z-10 flex flex-col pointer-events-none">
    <div
      class="flex-1 w-full border-x-4 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)] relative overflow-hidden"
    >
      <div class="absolute inset-0 opacity-40 shrink-0 finish-line"></div>
    </div>
    <div
      class="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/50 uppercase tracking-tighter"
    >
      Finish
    </div>
  </div>
</template>

<style scoped>
.finish-line {
  background-image: conic-gradient(#fff 90deg, #000 90deg 180deg, #fff 180deg 270deg, #000 270deg);
  background-size: 16px 16px;
}
</style>
