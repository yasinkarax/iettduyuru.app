<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform -translate-y-20 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform -translate-y-20 opacity-0"
  >
    <div
      class="fixed top-4 left-0 right-0 z-50 max-w-md mx-auto px-4"
    >
      <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border-2 border-slate-700 overflow-hidden">
        <!-- Status Bar at Top -->
        <div :class="['h-1.5 w-full bg-gradient-to-r', statusInfo.gradient]"></div>
        
        <div class="p-5">
          <!-- Header -->
          <div class="flex items-start gap-4 mb-3">
            <!-- App Icon -->
            <div class="flex-shrink-0">
              <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <div class="w-12 h-12">
                  <BusLogo />
                </div>
              </div>
            </div>

            <!-- Title and Route -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-white font-bold text-sm">Otobüs Bildirimleri</span>
                <div :class="['w-2 h-2 rounded-full animate-pulse', statusInfo.color]"></div>
              </div>
              <div class="flex items-center gap-2">
                <MapPin class="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span class="text-gray-300 font-semibold text-base truncate">{{ route }}</span>
              </div>
            </div>

            <!-- Close Button -->
            <button
              @click="emit('onClose')"
              class="flex-shrink-0 p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X class="w-4 h-4 text-white" />
            </button>
          </div>

          <!-- Message Content -->
          <div class="space-y-3">
            <!-- Route Number and Time -->
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                <div class="bg-white rounded-xl px-3 py-1.5 shadow-md">
                  <span class="text-slate-900 font-bold text-lg">{{ routeNumber }}</span>
                </div>
                <div :class="['flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r', statusInfo.gradient]">
                  <Clock class="w-4 h-4 text-white" />
                  <span class="text-white font-bold text-sm">{{ time }}</span>
                </div>
              </div>
              
              <div :class="['px-3 py-1.5 rounded-full shadow-md', statusInfo.color]">
                <span class="text-white font-bold text-xs">{{ statusInfo.text }}</span>
              </div>
            </div>
            
            <p class="text-gray-300 text-sm leading-relaxed">{{ message }}</p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { MapPin, X, Clock } from 'lucide-vue-next';
import BusLogo from './BusLogo.vue';

interface Props {
  route: string;
  routeNumber: string;
  time: string;
  message: string;
  status: 'active' | 'upcoming' | 'delayed';
}

const props = defineProps<Props>();
const emit = defineEmits(['onClose']);

const statusInfo = computed(() => {
  switch (props.status) {
    case 'active':
      return { color: 'bg-red-500', text: 'İptal Edildi', gradient: 'from-red-500 to-red-600' };
    case 'upcoming':
      return { color: 'bg-blue-500', text: 'Yaklaşan Sefer', gradient: 'from-blue-500 to-blue-600' };
    case 'delayed':
      return { color: 'bg-amber-500', text: 'Gecikmeli', gradient: 'from-amber-500 to-amber-600' };
    default:
      return { color: 'bg-gray-500', text: '', gradient: 'from-gray-500 to-gray-600' };
  }
});
</script>
