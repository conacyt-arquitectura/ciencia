import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  public active = false;

  public toggle(): void {
    this.active = !this.active;
  }

  public hide(): void {
    this.active = false;
  }
}
