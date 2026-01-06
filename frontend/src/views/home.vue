<template>
  <div
    :class="[
      'min-h-screen transition-colors duration-300 flex justify-center',
      isDarkMode
        ? 'bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e40af] via-slate-950 to-slate-950'
        : 'bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50',
      isDarkMode ? 'dark' : ''
    ]"
  >
    <div class="w-full max-w-4xl px-6 py-8">
      <!-- Header -->
      <div class="flex items-center justify-between mb-12">
        <!-- Menu Button -->
        <button
          @click="isMenuOpen = true"
          :class="[
            'p-3 rounded-2xl backdrop-blur-sm shadow-lg transition-transform hover:scale-105 active:scale-95',
            isDarkMode ? 'bg-slate-800/50 text-gray-300' : 'bg-white/50 text-gray-700',
          ]"
        >
          <Menu class="w-7 h-7" />
        </button>

        <!-- Logo -->
        <div class="relative">
          <div
            :class="[
              'absolute inset-0 blur-xl opacity-30 rounded-full',
              isDarkMode
                ? 'bg-gradient-to-r from-red-500 to-orange-500'
                : 'bg-gradient-to-r from-red-400 to-orange-400',
            ]"
          ></div>
          <div class="relative rounded-full p-3 w-32 h-32 flex items-center justify-center">
            <BusLogo />
          </div>
        </div>

        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          :class="[
            'relative w-24 h-12 rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95',
            isDarkMode ? 'bg-slate-700' : 'bg-gray-300',
          ]"
        >
          <div
            :class="[
              'absolute top-1 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300',
              isDarkMode ? 'bg-slate-900 translate-x-1' : 'bg-white translate-x-12',
            ]"
          >
            <Moon v-if="isDarkMode" class="w-5 h-5 text-blue-400" />
            <Sun v-else class="w-5 h-5 text-amber-500" />
          </div>
        </button>
      </div>

      <!-- Search Bar -->
      <div class="mb-6">
        <div
          :class="[
            'relative backdrop-blur-md rounded-3xl shadow-xl border',
            isDarkMode
              ? 'bg-white/5 border-white/10'
              : 'bg-white/80 border-gray-200',
          ]"
        >
          <Search
            :class="[
              'absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5',
              isDarkMode ? 'text-gray-400' : 'text-gray-500',
            ]"
          />
          <input
            type="text"
            placeholder="Otobus hatti ara..."
            v-model="searchQuery"
            @keydown.enter="handleSearch"
            :class="[
              'w-full py-5 pl-16 pr-6 bg-transparent outline-none rounded-3xl text-xl',
              isDarkMode
                ? 'text-white placeholder-gray-400'
                : 'text-gray-900 placeholder-gray-500',
            ]"
          />
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <button
          @click="handleSearch"
          class="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-6 px-6 rounded-3xl shadow-xl font-medium text-lg flex items-center justify-center gap-3 group transition-transform hover:scale-[1.02] hover:-translate-y-0.5 active:scale-98"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <BusIcon class="w-6 h-6 relative z-10" />
          <span class="relative z-10">Otobüsün duyurularını al</span>
        </button>

        <button
          @click="fetchAnnouncements(null)"
          :class="[
            'relative overflow-hidden backdrop-blur-md border-2 py-6 px-6 rounded-3xl shadow-xl font-medium text-lg flex items-center justify-center gap-3 group transition-transform hover:scale-[1.02] hover:-translate-y-0.5 active:scale-98',
            isDarkMode
              ? 'bg-white/5 border-white/10 text-white'
              : 'bg-white border-gray-200 text-gray-900',
          ]"
        >
          <div
            :class="[
              'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300',
              isDarkMode ? 'bg-slate-700/50' : 'bg-gray-100',
            ]"
          ></div>
          <Bell class="w-6 h-6 relative z-10" />
          <span class="relative z-10">Tüm duyuruları al</span>
        </button>
      </div>

      <!-- Announcements List -->
      <div v-if="loading" class="text-center py-10">
         <span :class="isDarkMode ? 'text-white' : 'text-gray-900'">Yükleniyor...</span>
      </div>
      <div v-else-if="error" class="text-center py-10 text-red-500">
        {{ error }}
      </div>
      
      <TransitionGroup
        name="list"
        tag="div"
        class="space-y-5"
      >
        <div
          v-for="(announcement) in mappedAnnouncements"
          :key="announcement.id"
          :class="[
            'relative overflow-hidden bg-gradient-to-br backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 transition-transform hover:scale-[1.01] hover:-translate-y-1',
            getStatusColor(announcement.status),
            isDarkMode ? '' : 'bg-white/40',
          ]"
        >
          <div class="flex gap-6">
            <!-- Route Number Badge -->
            <div class="flex-shrink-0">
              <div
                :class="[
                  'w-24 h-24 rounded-full flex items-center justify-center shadow-lg relative transition-transform hover:scale-110 hover:rotate-6',
                  isDarkMode
                    ? 'bg-white'
                    : 'bg-gradient-to-br from-white to-gray-100',
                ]"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                ></div>
                <span
                  :class="[
                    'text-md md:text-3xl font-bold relative z-10 text-center break-words p-2',
                    isDarkMode ? 'text-slate-900' : 'text-slate-900',
                  ]"
                >
                  {{ announcement.routeNumber }}
                </span>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 space-y-3">
              <div class="flex flex-col md:flex-row items-start justify-between gap-4">
                <div class="flex items-center gap-3">
                  <MapPin
                    :class="[
                      'w-5 h-5 flex-shrink-0',
                      isDarkMode ? 'text-cyan-400' : 'text-cyan-600',
                    ]"
                  />
                  <h3
                    :class="[
                      'font-bold text-lg leading-tight',
                      isDarkMode ? 'text-white' : 'text-gray-900',
                    ]"
                  >
                    {{ announcement.route }}
                  </h3>
                </div>
                <div
                  v-if="announcement.time"
                  :class="[
                    'flex items-center gap-2 px-3 py-1.5 rounded-2xl shadow-lg flex-shrink-0',
                    getTimeColor(announcement.status),
                  ]"
                >
                  <Clock class="w-4 h-4 text-white" />
                  <span class="font-bold text-white text-sm">
                    {{ announcement.time }}
                  </span>
                </div>
              </div>

              <p
                :class="[
                  'leading-relaxed text-base',
                  isDarkMode ? 'text-gray-200' : 'text-gray-700',
                ]"
              >
                {{ announcement.message }}
              </p>

              <!-- Status Indicator -->
              <div class="flex items-center gap-3">
                <div
                  :class="[
                    'flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg',
                    getStatusBgColor(announcement.status),
                  ]"
                >
                  <div
                    class="w-2.5 h-2.5 rounded-full bg-white animate-pulse"
                  ></div>
                  <span class="text-sm font-bold text-white">
                    {{ getStatusText(announcement.status) }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full pointer-events-none"
          ></div>
        </div>
      </TransitionGroup>
    </div>

    <!-- Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
        @click.self="isMenuOpen = false"
      >
        <div
          class="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700 w-[90%] max-w-md relative"
        >
          <!-- Close Button -->
          <button
             @click="isMenuOpen = false"
            class="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X class="w-6 h-6 text-white" />
          </button>

          <!-- Logo -->
          <div class="flex justify-center mb-8 pt-4">
            <div
              class="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl"
            >
               <div class="w-28 h-28">
                  <BusLogo />
               </div>
            </div>
          </div>

          <!-- Menu Items -->
          <div class="space-y-3 mb-8">
            <button
               @click="isMenuOpen = false"
              class="w-full bg-white text-slate-900 py-5 px-6 rounded-2xl shadow-lg font-semibold text-xl flex items-center gap-4 hover:bg-gray-50 transition-all hover:scale-[1.02] active:scale-98"
            >
              <Home class="w-6 h-6" />
              Ana Sayfa
            </button>

            <button
               @click="isMenuOpen = false"
              class="w-full bg-white text-slate-900 py-5 px-6 rounded-2xl shadow-lg font-semibold text-xl flex items-center gap-4 hover:bg-gray-50 transition-all hover:scale-[1.02] active:scale-98"
            >
              <Info class="w-6 h-6" />
              Uygulama Hakkında
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Mobile Notification -->
    <Teleport to="body">
       <MobileNotification
        v-if="showNotification && currentNotification"
        :route="currentNotification.route"
        :routeNumber="currentNotification.routeNumber"
        :time="currentNotification.time"
        :message="currentNotification.message"
        :status="currentNotification.status"
        @on-close="showNotification = false"
       />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import {
  Moon,
  Sun,
  Search,
  Bus as BusIcon, // Renamed to avoid partial conflict if needed, though mostly visual
  Bell,
  Clock,
  MapPin,
  Menu,
  Home,
  Info,
  X,
} from 'lucide-vue-next';
import BusLogo from '@/components/BusLogo.vue';
import MobileNotification from '@/components/MobileNotification.vue';

// Interfaces
interface IAnnouncementData {
  HATKODU: string;
  HAT: string;
  MESAJ: string;
  GUNCELLEME_SAATI?: string;
  ID?: string;
  TIP?: string;
}

interface IApiResponse {
  success: boolean;
  data?: IAnnouncementData[];
  message?: string;
}

interface UiAnnouncement {
  id: string | number;
  route: string;
  routeNumber: string;
  time: string;
  message: string;
  status: 'active' | 'upcoming' | 'delayed';
}

// State
const isDarkMode = ref(true);
const searchQuery = ref('');
const isMenuOpen = ref(false);
const rawAnnouncements = ref<IAnnouncementData[]>([]);
const loading = ref(false);
const error = ref('');

// Notification State
const showNotification = ref(false);
const currentNotification = ref<UiAnnouncement | null>(null);

// Computed
const mappedAnnouncements = computed<UiAnnouncement[]>(() => {
  return rawAnnouncements.value.map((item, index) => {
    // Basic status inference
    let status: UiAnnouncement['status'] = 'active';
    if (item.MESAJ.toLowerCase().includes('iptal')) status = 'active'; // Red
    else if (item.MESAJ.toLowerCase().includes('gecikme')) status = 'delayed'; // Orange
    else status = 'upcoming'; // Blue (default info)

    // Parse time if exists or use "Güncel"
    // Valid formats often like "Kayit Saati: 19:33"
    let time = item.GUNCELLEME_SAATI || '';
    const timeMatch = time.match(/(\d{2}:\d{2})/);
    if(timeMatch) time = timeMatch[1];
    if(!time) time = 'Simdi';

    return {
      id: item.ID || index,
      route: item.HAT,
      routeNumber: item.HATKODU,
      time: time,
      message: item.MESAJ,
      status: status
    };
  });
});

// Methods
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if(isDarkMode.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

const showNotificationFor = (announcement: UiAnnouncement) => {
    currentNotification.value = announcement;
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 5000);
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'from-red-500/20 to-orange-500/20 border-red-500/30';
    case 'upcoming':
      return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30';
    case 'delayed':
      return 'from-amber-500/20 to-yellow-500/20 border-amber-500/30';
    default:
      return 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
  }
};

const getTimeColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-gradient-to-r from-red-500 to-red-600';
    case 'upcoming':
      return 'bg-gradient-to-r from-blue-500 to-blue-600';
    case 'delayed':
      return 'bg-gradient-to-r from-amber-500 to-amber-600';
    default:
      return 'bg-gradient-to-r from-gray-500 to-gray-600';
  }
};

const getStatusBgColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-red-500/90';
    case 'upcoming':
      return 'bg-blue-500/90';
    case 'delayed':
      return 'bg-amber-500/90';
    default:
      return 'bg-gray-500/90';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'active':
      return 'İptal / Kritik';
    case 'upcoming':
      return 'Bilgi / Sefer';
    case 'delayed':
      return 'Gecikme / Uyarı';
    default:
      return 'Bilgi';
  }
};

const handleSearch = () => {
    const query = searchQuery.value.trim();
    if(query) fetchAnnouncements(query);
    else fetchAnnouncements(null);
}

const fetchAnnouncements = async (hatKodu: string | null = null) => {
  loading.value = true;
  error.value = '';
  rawAnnouncements.value = []; // Clear
  try {
    let url = 'http://localhost:3000/api/announcements';
    if (hatKodu) {
      url += `?hatKodu=${encodeURIComponent(hatKodu)}`;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const result = (await response.json()) as IApiResponse;
    if (result.success && result.data) {
      rawAnnouncements.value = result.data;
    } else {
      error.value = result.message || 'Veri bulunamadı.';
    }
  } catch (err: any) {
    console.error(err);
    error.value = 'Bir hata oluştu.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
    // Initial load
    fetchAnnouncements();
    // Default mode
    if(isDarkMode.value) document.documentElement.classList.add('dark');
});
</script>

<style scoped>
/* List Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* Fade Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
