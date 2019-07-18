import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  public collapsed = true;

  public toggle(): void {
    this.collapsed = !this.collapsed;
  }

  public hide(): void {
    this.collapsed = true;
  }
}
