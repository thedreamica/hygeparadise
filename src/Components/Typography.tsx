import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

interface TypographyProps {
    markdown: string;
    variant: any;
    color: string;
  }

let theme = createTheme();
theme = responsiveFontSizes(theme);

// please refer to the material ui doc for the variants
//  https://mui.com/material-ui/customization/typography/

const CustomTypography: React.FC<TypographyProps> = ({ markdown, variant, color= 'inherit' }) => {
    return (
            <ThemeProvider theme={theme}>
                <Typography variant={variant} color={color}>
                    {markdown}
                </Typography>
            </ThemeProvider>
    )
}


export default CustomTypography