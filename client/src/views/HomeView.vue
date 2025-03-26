<template>
  <div>
    <TheNavbar />
    <TheHero />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <TheFooter />
    <ChatBot />
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar.vue'
import TheHero from '../components/TheHero.vue'
import AboutSection from '../components/AboutSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import TheFooter from '../components/TheFooter.vue'
import ChatBot from '../components/ChatBot.vue'

export default {
  name: 'HomeView',
  components: {
    TheNavbar,
    TheHero,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    TheFooter,
    ChatBot
  }
}
</script>
