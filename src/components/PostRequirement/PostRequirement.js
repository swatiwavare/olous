import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Classes from './PostRequirement.module.css';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';

const PostRequirement = (props) => {
  const media_480 = useMediaQuery('(max-width:480px)');
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const theme = useTheme();
  const [CategoryName, setCategoryName] = useState([]);
  const [SubCategoryName, setSubCategoryName] = useState([]);
  const [CurrencyName,setCurrency]=useState([]);
  const category = [
    'Consultant',
    'Associate',
    'Techical Lead',

  ];
  const Subcategory = [
    'Architecture Design',
    'Interior Design ',
    'BIM',

  ];
 
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event) => {
    event.preventdefault();
    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  

  const handleChangeForSubCategory = (event) => {
    const {
      target: { value },
    } = event;
    setSubCategoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleCurrencyChange = (event) => {
    const {
      target: { value },
    } = event;
    setCurrency(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  

  function getStyles(category, CategoryName, theme) {
    return {
      fontWeight:
        CategoryName.indexOf(category) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


  return (
    <div>
      <div className={Classes.form_container}>
        <div className={Classes.main_header}>Need Vender,Consultant,Contractor?</div>
        <div className={Classes.headerImage}></div>
        <p className={Classes.title}>Fill in your requirements and contact details, and we’ll help you connect
          with the right business!
        </p>
        <p className={Classes.title}><span className={Classes.asterrisk_span}>&#42;</span>Mandatory</p>
        <form className={Classes.root} noValidate autoComplete="off">
          <div className={Classes.are_you_radio_group}><div className={Classes.title}><span className={Classes.asterrisk_span}>&#42;</span>Are you?</div>
            <FormControl sx={media_480 ? { m: 1, width: 400 } : { m: 1, width: 700 }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="Company"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
                <FormControlLabel value="Company" control={<Radio />} label="Company" />

              </RadioGroup>
            </FormControl>
          </div>
            
        


          <p className={Classes.title}><span className={Classes.asterrisk_span}>&#42;</span>What are you looking for? Choose from below categories</p>
          <FormControl sx={media_480 ? { m: 1, width: 300 } : { m: 1, width: 700 }}>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              value={CategoryName}
              onChange={handleChange}
              // input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value}  
                     
                     />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {category.map((category) => (
                <MenuItem
                  key={category}
                  value={category}
                  style={getStyles(category, CategoryName, theme)}
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>





          <p className={Classes.title}><span className={Classes.asterrisk_span}>&#42;</span>Select from below sub category to reach the right connect</p>
          <FormControl sx={media_480 ? { m: 1, width: 300 } : { m: 1, width: 700 }}>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={SubCategoryName}
              onChange={handleChangeForSubCategory}
              inputProps={{ 'aria-label': 'Without label' }}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {Subcategory.map((Subcategory) => (
                <MenuItem
                  key={Subcategory}
                  value={Subcategory}
                  style={getStyles(Subcategory, SubCategoryName, theme)}
                >
                  {Subcategory}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <p className={Classes.title}>Write you requirement</p>
          <FormControl sx={media_480 ? { m: 1, width: 300 } : { m: 1, width: 700 }}>
            <InputLabel id="demo-multiple-chip-label">Eg: I am looking for a RCC Contractor for a Residential project of 200,000 sq.ft</InputLabel>
            <TextField id="outlined-basic" multiline={true} row={4} /></FormControl>

          <p className={Classes.title}><span className={Classes.asterrisk_span}>&#42;</span>Work Location</p>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Country</InputLabel>
            <TextField id="outlined-basic" /></FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">City</InputLabel>
            <TextField id="outlined-basic" />
          </FormControl>

          <p className={Classes.title}>Expected Value of Works<span className={Classes.title_span}>(Select from below)</span> </p>
          <div className={Classes.currency_details}>
            <div className={Classes.currency_detail}>
              <p className={Classes.title}>Currency</p>
              <FormControl sx={{ m: 1, width: 110 }}>
                <InputLabel id="demo-multiple-chip-label">Rupees</InputLabel>
                <TextField id="outlined-basic" /></FormControl>
            </div>
            <div className={Classes.currency_detail}>
              <p className={Classes.title}>Value</p>
              <FormControl sx={{ m: 1, width: 110 }}>
                {/* <InputLabel id="demo-multiple-chip-label">Currency</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={CurrencyName}
                  onChange={handleCurrencyChange}
                  input={<OutlinedInput id="select-simple-chip" label="Chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {Currency.map((Currency) => (
                    <MenuItem
                      key={Currency}
                      value={Currency}
                      style={getStyles(Currency, CurrencyName, theme)}
                    >
                      {Currency}
                    </MenuItem>
                  ))}
                </Select> */}


        <InputLabel id="demo-simple-select-helper-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={CurrencyName}
          label="Currency"
          onChange={handleCurrencyChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>1 Lakh to 50 Lakh</MenuItem>
          <MenuItem value={20}>2 Lakh to 70 Lakh</MenuItem>
          <MenuItem value={30}>3 Lakh to 80 Lakh</MenuItem>
        </Select>
       
      </FormControl>







              
            </div>
          </div>

          <p className={Classes.title}><span className={Classes.asterrisk_span}>&#42;</span>Your Contact Details</p>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Country</InputLabel>
            <TextField id="outlined-basic" /></FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">City</InputLabel>
            <TextField id="outlined-basic" />
          </FormControl><br />

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">name</InputLabel>
            <TextField id="outlined-basic" /></FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Company</InputLabel>
            <TextField id="outlined-basic" />
          </FormControl><br />

          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Email</InputLabel>
            <TextField id="outlined-basic" /></FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">9898989898</InputLabel>
            <TextField id="outlined-basic" />
          </FormControl><br />

          <div className={Classes.submit_button_container}><button className={Classes.submit_button}>Submit</button></div>
        </form>
      </div>
      <div className={Classes.footer}>
        <div className={Classes.logo}></div>
        <div className={Classes.menu_items}>
          <div className={Classes.menu_item}>Terms & Conditions</div>|
          <div className={Classes.menu_item}>Privacy policy</div>|
          <div className={Classes.menu_item}>Support</div>
        </div>
        <div className={Classes.social_media_links}>
          <div className={[Classes.social_media_link, Classes.facebook_logo].join(' ')}></div>
          <div className={[Classes.social_media_link, Classes.instagram_logo].join(' ')}></div>
          <div className={[Classes.social_media_link, Classes.youtube_logo].join(' ')}></div>
          <div className={[Classes.social_media_link, Classes.linkdine_logo].join(' ')}></div>
          <div className={[Classes.social_media_link, Classes.twitter_logo].join(' ')}></div>
        </div>
      </div>
    </div>

  )
}

export default PostRequirement