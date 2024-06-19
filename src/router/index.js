import { createRouter, createWebHistory } from 'vue-router';


import AboutSection from '@/components/AboutSection.vue';
import ResumeSection from '@/components/ResumeSection.vue';
import PortfolioSection from '@/components/PortfolioSection.vue';
import ContactSection from '@/components/ContactSection.vue';

const routes = [
    { path: '/about', name: 'About', component: AboutSection },
    { path: '/contact', name: 'Contact', component: ContactSection },
    { path: '/works', name: 'Works', component: PortfolioSection },
    { path: '/resume', name: 'Resume', component: ResumeSection },
    { path: '/', redirect: '/about' }
  ];
  const router = createRouter({ 
    history: createWebHistory(),
    routes
  });
  
  export default router;