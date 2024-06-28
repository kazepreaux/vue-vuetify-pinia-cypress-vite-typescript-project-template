export default interface IContext {
  withInterceptors(): this;
  mount(): this;
}
