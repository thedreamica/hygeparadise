
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface TypographyProps {
    markdown: string;
    variant: any;
  }

let theme = createTheme();
theme = responsiveFontSizes(theme);

// please refer to the material ui doc for the variants
//  https://mui.com/material-ui/customization/typography/

const TypographyMicro: React.FC<TypographyProps> = ({ markdown, variant }) => {
    return (
            <ThemeProvider theme={theme}>
                <Typography variant={variant}>
                    {markdown}
                </Typography>
            </ThemeProvider>
    )
}


export default TypographyMicro