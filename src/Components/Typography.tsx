
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

// please refer to the material ui doc for the variants
//  https://mui.com/material-ui/customization/typography/

const TypographyMicro = ({ markdown, variant }: any) => {
    return (
            <ThemeProvider theme={theme}>
                <Typography variant={variant}>
                    {markdown}
                </Typography>
            </ThemeProvider>
    )
}


export default TypographyMicro