<template>
  <div class="nanny-card-container">
    <img
      :alt="image_alt"
      :src="image_src1"
      loading="lazy"
      class="nanny-card-image"
    />
    <div class="nanny-card-container1">
      <span class="nanny-card-text">
        <span class="nanny-card-text1">Sandrine </span>
        <span class="nanny-card-text2">Oku </span>
      </span>
      <div class="nanny-card-container2">
        <svg viewBox="0 0 950.8571428571428 1024" class="nanny-card-icon">
          <path
            d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
          ></path></svg
        ><svg viewBox="0 0 950.8571428571428 1024" class="nanny-card-icon2">
          <path
            d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
          ></path></svg
        ><svg viewBox="0 0 950.8571428571428 1024" class="nanny-card-icon4">
          <path
            d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NannyCard',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default:
        'https://media.istockphoto.com/id/609608134/photo/woman-with-basket-and-cleaning-equipment.jpg?s=612x612&w=0&k=20&c=9a6DIVAdZnS8tRQ9UA5wWsvIvexqq8jyGq2woKzUyWE=',
    },
    image_src1: {
      type: String,
      default:
        'https://media.istockphoto.com/id/609608134/photo/woman-with-basket-and-cleaning-equipment.jpg?s=612x612&w=0&k=20&c=9a6DIVAdZnS8tRQ9UA5wWsvIvexqq8jyGq2woKzUyWE=',
    },
  },
}
</script>

<style scoped>
.nanny-card-container {
  width: 371px;
  height: 127px;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: 13px;
  justify-content: center;
}
.nanny-card-image {
  width: 98px;
  height: 98px;
  object-fit: cover;
  border-color: var(--dl-color-primary-500);
  border-width: 5px;
  margin-right: 11px;
  border-radius: var(--dl-radius-radius-round);
}
.nanny-card-container1 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.nanny-card-text {
  font-size: 24px;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-unit);
  font-family: Poppins;
  font-weight: 700;
}
.nanny-card-text1 {
  color: #000000;
}
.nanny-card-text2 {
  color: #ff4d4f;
}
.nanny-card-container2 {
  flex: 0 0 auto;
  width: 111px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nanny-card-icon {
  fill: var(--dl-color-primary-300);
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-unit);
}
.nanny-card-icon2 {
  fill: var(--dl-color-primary-300);
  width: 24px;
  height: 24px;
  margin-right: var(--dl-space-space-unit);
}
.nanny-card-icon4 {
  fill: var(--dl-color-primary-300);
  width: 24px;
  height: 24px;
  margin-right: 0px;
}
@media(max-width: 474px) {
  .nanny-card-image {
    width: 119px;
    height: 117px;
    margin-right: var(--dl-space-space-unit);
  }
  .nanny-card-text {
    font-size: 24px;
  }
}
</style>
