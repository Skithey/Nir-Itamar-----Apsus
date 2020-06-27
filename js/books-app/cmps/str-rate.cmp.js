export default {
    template: `
    <div class="star-container flex justify-center">
      <div v-for="starNum in starsAmount">
        <i class="fa-star" @click="setStar(starNum)" :class="(starNum) <= selectedStar ? classNames.marked : classNames.unmarked"></i>
      </div>
    </div>
  `,
    data() {
        return {
            selectedStar: 0,
            starsAmount: 5,
            classNames: {
                marked: "fas",
                unmarked: "far",
            },
        };
    },
    methods: {
        setStar(star) {
            this.selectedStar = star;
            this.$emit("starSelection", star);
        },
    },
};