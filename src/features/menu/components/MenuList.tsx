import {
  Section, Category, Name, Price, MenuItem,
} from '../menuStyle';

export default function MenuList() {
  return (
    <Section>
      <Category>치킨</Category>
      <MenuItem>
        <Name>순살치킨 6조각</Name>
        <Price>₩ 5000</Price>
      </MenuItem>
    </Section>
  );
}
