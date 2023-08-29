import {Card} from './card/card';
import {CardContent} from './cardContent/cardContent';
import {CardDescription} from './cardDescription/cardDescription';
import {CardFooter} from './cardFooter/cardFooter';
import {CardHeader} from './cardHeader/cardHeader';
import {CardTitle} from './cardTitle/cardTitle';

const CardRoot = Card as typeof Card & {
  Content: typeof CardContent;
  Description: typeof CardDescription;
  Footer: typeof CardFooter;
  Header: typeof CardHeader;
  Title: typeof CardTitle;
};

CardRoot.Content = CardContent;
CardRoot.Description = CardDescription;
CardRoot.Footer = CardFooter;
CardRoot.Header = CardHeader;
CardRoot.Title = CardTitle;

export default CardRoot;
