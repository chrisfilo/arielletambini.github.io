import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import CV from '@/components/CV';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Publications from '@/components/Publications';
import Teaching from '@/components/Teaching';
import Talks from '@/components/Talks';
import Leadership from '@/components/Leadership';
import Awards from '@/components/Awards';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello! I\'m Anisha',
      component: About,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/teaching',
      name: 'Teaching',
      component: Teaching,
    },
    {
      path: '/publications',
      name: 'Publications',
      component: Publications,
    },
    {
      path: '/talks',
      name: 'Talks',
      component: Talks,
    },
    {
      path: '/leadership',
      name: 'Leadership',
      component: Leadership,
    },
    {
      path: '/awards',
      name: 'Awards',
      component: Awards,
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV,
    },
  ],
  linkActiveClass: 'active',
});
