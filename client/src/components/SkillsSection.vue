<template>
  <section id="skills" class="py-20 bg-light">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div class="w-20 h-1 bg-primary mx-auto"></div>
        <p class="mt-6 max-w-2xl mx-auto text-dark-lightest text-lg">
          I specialize in modern web technologies and continuously expand my skillset to deliver exceptional digital solutions.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(skill, index) in skills" 
          :key="index" 
          class="bg-white p-8 rounded-xl shadow-sm border border-light-darkest hover:shadow-md transition-shadow slideUp"
        >
          <div 
            class="w-14 h-14 flex items-center justify-center rounded-xl mb-6"
            :class="`bg-${skill.color} bg-opacity-10`"
          >
            <i 
              :class="`bx ${skill.icon} text-${skill.color} text-3xl`"
            ></i>
          </div>
          <h3 class="text-xl font-bold mb-3">{{ skill.title }}</h3>
          <p class="text-dark-lightest mb-6">
            {{ skill.description }}
          </p>
          <div class="space-y-3">
            <div v-for="(subskill, subIndex) in skill.subskills" :key="subIndex">
              <div class="flex justify-between mb-1">
                <span class="font-medium">{{ subskill.name }}</span>
                <span>{{ subskill.level }}%</span>
              </div>
              <div class="w-full bg-light-darker rounded-full h-2">
                <div 
                  class="h-2 rounded-full" 
                  :class="`bg-${skill.color}`"
                  :style="{ width: `${subskill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        {
          title: 'Frontend Development',
          description: 'Creating responsive, visually appealing user interfaces with modern web technologies.',
          icon: 'bxl-html5',
          color: 'primary',
          subskills: [
            { name: 'Vue.js', level: 95 },
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 85 }
          ]
        },
        {
          title: 'Backend Development',
          description: 'Building robust server-side applications and APIs to power dynamic web experiences.',
          icon: 'bxl-nodejs',
          color: 'secondary',
          subskills: [
            { name: 'Node.js', level: 88 },
            { name: 'Express', level: 85 },
            { name: 'MongoDB', level: 80 }
          ]
        },
        {
          title: 'UI/UX Design',
          description: 'Designing intuitive user experiences and visually appealing interfaces.',
          icon: 'bxs-palette',
          color: 'accent',
          subskills: [
            { name: 'Figma', level: 82 },
            { name: 'Responsive Design', level: 90 },
            { name: 'User Experience', level: 78 }
          ]
        },
        {
          title: 'DevOps',
          description: 'Streamlining development, deployment, and operations for efficient workflows.',
          icon: 'bx-server',
          color: 'primary',
          subskills: [
            { name: 'Git/GitHub', level: 92 },
            { name: 'CI/CD', level: 75 },
            { name: 'Docker', level: 70 }
          ]
        },
        {
          title: 'Testing',
          description: 'Ensuring application quality and reliability through comprehensive testing strategies.',
          icon: 'bx-test-tube',
          color: 'secondary',
          subskills: [
            { name: 'Jest', level: 85 },
            { name: 'Vue Test Utils', level: 80 },
            { name: 'E2E Testing', level: 75 }
          ]
        },
        {
          title: 'Performance Optimization',
          description: 'Enhancing application speed, efficiency, and overall user experience.',
          icon: 'bx-tachometer',
          color: 'accent',
          subskills: [
            { name: 'Lighthouse Auditing', level: 88 },
            { name: 'Image Optimization', level: 92 },
            { name: 'Code Splitting', level: 83 }
          ]
        }
      ]
    }
  }
}
</script>
