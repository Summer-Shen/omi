import { h, tag, WeElement, OmiProps, classNames } from 'omi'
import { IconProps } from './type'
import { TdClassNamePrefix } from '../utils/clsx'
import css from './style/index'

@tag('t-icon-undertake-transaction')
export default class UndertakeTransaction extends WeElement<IconProps> {
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
        <path
          d="M14.5 3C13.1193 3 12 4.11929 12 5.5C12 6.88071 13.1193 8 14.5 8C15.0325 8 15.5234 7.83465 15.9279 7.55247C16.578 7.099 17 6.3487 17 5.5C17 4.6513 16.578 3.901 15.9279 3.44753C15.5234 3.16535 15.0325 3 14.5 3ZM10 5.5C10 3.01472 12.0147 1 14.5 1C15.2173 1 15.897 1.16848 16.5 1.46802C17.103 1.16848 17.7827 1 18.5 1C20.9853 1 23 3.01472 23 5.5C23 7.98528 20.9853 10 18.5 10C17.7827 10 17.103 9.83152 16.5 9.53198C15.897 9.83152 15.2173 10 14.5 10C12.0147 10 10 7.98528 10 5.5ZM18.2502 7.98774C18.3323 7.99585 18.4156 8 18.5 8C19.8807 8 21 6.88071 21 5.5C21 4.11929 19.8807 3 18.5 3C18.4156 3 18.3323 3.00415 18.2502 3.01226C18.7236 3.72454 19 4.57996 19 5.5C19 6.42004 18.7236 7.27546 18.2502 7.98774ZM8.43505 13.25C8.27075 13.2496 8.10798 13.2816 7.95605 13.3442C7.80432 13.4066 7.66639 13.4984 7.55011 13.6141L5.5 15.6642V19.5H11.1269L16.9305 18.0491L20.4625 16.5424C20.5462 16.4963 20.6167 16.4294 20.667 16.348C20.7212 16.2604 20.7499 16.1594 20.75 16.0565C20.7499 15.9708 20.73 15.8863 20.692 15.8096C20.6539 15.7328 20.5986 15.6659 20.5305 15.6139C20.4623 15.562 20.3831 15.5265 20.299 15.5102C20.2149 15.4938 20.1282 15.4971 20.0455 15.5198L20.0256 15.5252L13.6135 17L13.1251 17L12.1251 17L10 17V15H13.125C13.3571 15 13.5796 14.9078 13.7437 14.7437C13.9078 14.5796 14 14.3571 14 14.125C14 13.8929 13.9078 13.6704 13.7437 13.5063C13.5796 13.3422 13.3571 13.25 13.125 13.25H8.4375L8.43505 13.25ZM15.9866 14.402L19.5394 13.5848C19.9119 13.4864 20.3019 13.4734 20.6803 13.5468C21.0663 13.6218 21.4298 13.7848 21.7426 14.0231C22.0554 14.2614 22.309 14.5686 22.4837 14.9209C22.6584 15.2731 22.7495 15.6609 22.75 16.0542C22.7502 16.5292 22.618 16.9956 22.3682 17.3996C22.1185 17.8036 21.761 18.13 21.336 18.3422L21.3093 18.3556L17.5695 19.9509L11.3731 21.5H0V14.25H4.08579L6.13787 12.1979C6.44046 11.8964 6.79953 11.6574 7.19455 11.4948C7.58917 11.3323 8.01192 11.2491 8.43868 11.25L8.43995 11.25L8.4375 11.25H8.43868H13.125C13.8875 11.25 14.6188 11.5529 15.1579 12.0921C15.6971 12.6312 16 13.3625 16 14.125C16 14.2179 15.9955 14.3103 15.9866 14.402ZM3.5 16.25H2V19.5H3.5V16.25Z"
          fill="currentColor"
        />
      </svg>
    )
  }
}