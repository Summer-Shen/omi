import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-barbecue')
export default class Barbecue extends WeElement<IconProps> {
  static css = css as string

  static defaultProps = {
    size: '1em',
    style: { fill: '#000' },
  }

  static propTypes = {
    size: [String, Number],
    onClick: Function,
    style: Object,
    class: String,
  }

  render(props: OmiProps<IconProps>) {
    const classPrefix = 't'
    const iconClassName = classNames(TdClassNamePrefix('icon'), props.class, {
      [`${TdClassNamePrefix('size-s')}`]: props.size === 'small',
      [`${TdClassNamePrefix('size-m')}`]: props.size === 'medium',
      [`${TdClassNamePrefix('size-l')}`]: props.size === 'large',
    })
    const flag = props.size === 'small' || props.size === 'medium' || props.size === 'large'
    const iconStyle = {
      ...props.style,
      fontSize: props.size,
    }
    return (
      <svg
        class={iconClassName}
        width={flag ? '24' : props.size}
        height={flag ? '24' : props.size}
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="&amp;#231;&amp;#131;&amp;#164;&amp;#232;&amp;#130;&amp;#137;_barbecue">
          <path
            id="Union"
            d="M13.316 2.7957C14.377 1.73477 16.0971 1.73477 17.158 2.7957L18.4741 4.11173L20.0926 2.49322L21.5068 3.90743L19.8883 5.52595L21.2043 6.84198C22.2652 7.90292 22.2652 9.62303 21.2043 10.684L19.9904 11.8979C19.53 12.3583 18.9454 12.6189 18.3445 12.6797C18.2837 13.2806 18.0231 13.8652 17.5626 14.3256L16.3488 15.5395C15.8883 15.9999 15.3038 16.2605 14.7028 16.3213C14.642 16.9223 14.3814 17.5069 13.921 17.9673L12.7071 19.1812C11.6462 20.2421 9.92606 20.2421 8.86513 19.1812L7.54909 17.8651L5.93058 19.4836L5.22347 18.7765C4.94358 18.4966 4.4898 18.4966 4.20991 18.7765C3.93003 19.0564 3.93003 19.5102 4.20991 19.7901C4.41042 19.9906 4.70152 20.0489 4.95601 19.9593L5.89924 19.6271L6.56355 21.5136L5.62032 21.8457C4.66738 22.1813 3.56081 21.9694 2.7957 21.2043C1.73477 20.1434 1.73477 18.4232 2.7957 17.3623C3.60694 16.5511 4.8036 16.3601 5.79625 16.7895L6.13487 16.4509L4.81884 15.1349C3.75791 14.0739 3.75791 12.3538 4.81884 11.2929L6.03273 10.079C6.49315 9.61859 7.07771 9.35798 7.67867 9.29719C7.73947 8.69623 8.00008 8.11166 8.4605 7.65124L9.67438 6.43736C10.1348 5.97694 10.7194 5.71633 11.3203 5.65553C11.3811 5.05457 11.6417 4.47001 12.1022 4.00959L13.316 2.7957ZM13.5164 6.43736L17.5626 10.4836C17.8425 10.7635 18.2963 10.7635 18.5762 10.4836L19.7901 9.26975C20.07 8.98987 20.07 8.53608 19.7901 8.2562L18.4741 6.94016L17.5 7.91421L16.0858 6.5L17.0598 5.52595L15.7438 4.20991C15.4639 3.93003 15.0101 3.93003 14.7302 4.20991L13.5164 5.4238C13.2365 5.70369 13.2365 6.15747 13.5164 6.43736ZM16.1484 11.8979L12.1022 7.85157C11.8223 7.57168 11.3685 7.57168 11.0886 7.85157L9.87471 9.06545C9.59483 9.34534 9.59483 9.79913 9.87471 10.079L13.921 14.1253C14.2009 14.4052 14.6547 14.4052 14.9345 14.1253L16.1484 12.9114C16.4283 12.6315 16.4283 12.1777 16.1484 11.8979ZM12.5068 15.5395L8.4605 11.4932C8.18061 11.2133 7.72683 11.2133 7.44694 11.4932L6.23306 12.7071C5.95317 12.987 5.95317 13.4408 6.23306 13.7207L10.2793 17.7669C10.5592 18.0468 11.013 18.0468 11.2929 17.7669L12.5068 16.5531C12.7867 16.2732 12.7867 15.8194 12.5068 15.5395Z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}