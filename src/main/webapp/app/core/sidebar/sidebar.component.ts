import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  public active = true;

  public toggle(): void {
    this.active = !this.active;
  }
}
