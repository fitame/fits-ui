import * as React from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {DayPicker} from 'react-day-picker';

import {buttonVariants} from '../button/button';

import styles from './calendar.module.scss';

const {outline, ghost} = buttonVariants.variants.variant;

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  const renderIconLeft = () => <ChevronLeft className={styles.icon} />;

  const renderIconRight = () => <ChevronRight className={styles.icon} />;

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={`${styles.dayPicker} ${className}`}
      classNames={{
        months: styles.months,
        month: styles.month,
        caption: styles.caption,
        caption_label: styles.captionLabel,
        nav: styles.nav,
        nav_button: `${outline} ${styles.navButton}`,
        nav_button_previous: styles.navButtonPrevious,
        nav_button_next: styles.navButtonNext,
        table: styles.table,
        head_row: styles.headRow,
        head_cell: styles.headCell,
        row: styles.row,
        cell: styles.cell,
        day: `${ghost} ${styles.day}`,
        day_selected: styles.daySelected,
        day_today: styles.dayToday,
        day_outside: styles.dayOutside,
        day_disabled: styles.dayDisabled,
        day_range_middle: styles.dayRangeMiddle,
        day_hidden: styles.dayHidden,
        ...classNames,
      }}
      components={{
        IconLeft: () => renderIconLeft(),
        IconRight: () => renderIconRight(),
      }}
      {...props}
    />
  );
};
Calendar.displayName = 'Calendar';

export {Calendar};
