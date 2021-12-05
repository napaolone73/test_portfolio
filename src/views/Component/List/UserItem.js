import clsx from 'clsx';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import userFill from '@iconify-icons/ant-design/user';
import emailFill from '@iconify-icons/ant-design/mail';
import calendarFill from '@iconify-icons/ant-design/calendar';
import mapFill from '@iconify-icons/ant-design/home';
import phoneFill from '@iconify-icons/ant-design/phone';
import iconLine from '@iconify-icons/ant-design/line-outlined';

import passwordFill from '@iconify-icons/ant-design/lock';

import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  Grid,
  Avatar,
  Typography
} from '@material-ui/core';
import { fDateShort } from 'src/utils/formatTime';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {},
  cardMediaWrap: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    paddingTop: 'calc(100% * 2 / 16)',
    '&:before': {
      top: 0,
      zIndex: 9,
      content: "''",
      width: '100%',
      height: '100%',
      position: 'absolute',
      backdropFilter: 'blur(3px)',
      borderTopLeftRadius: theme.shape.borderRadiusMd,
      borderTopRightRadius: theme.shape.borderRadiusMd,
      backgroundColor: ' #f8f9f9'
    }
  },
  avatarShape: {
    zIndex: 10,
    bottom: -26,
    position: 'absolute'
  }
}));

// ----------------------------------------------------------------------

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  className: PropTypes.string
};

function UserItem({ user, className }) {
  const classes = useStyles();

  const Options = [
    { titolo: 'Hi, my name is', icon: userFill, sottotitolo: user.nomeEsteso },
    { titolo: 'My mail address is', icon: emailFill, sottotitolo: user.email },
    { titolo: 'My birthday is', icon: calendarFill, sottotitolo: fDateShort(user.data_di_nascita) },
    { titolo: 'My address is', icon: mapFill, sottotitolo: user.indirizzo.indirizzo },
    { titolo: 'My phone number is', icon: phoneFill, sottotitolo: user.telefono },
    { titolo: 'My password is', icon: passwordFill, sottotitolo: user.dati_login.password },
  ];
  const [titolo, setTitolo] = useState(Options[0].titolo);
  const [sottotitolo, setsottotitolo] = useState(user.nomeEsteso);
  const [indexSel, setIndexSel] = useState(0);
  
  const onHover = (index) => {
    setTitolo(Options[index].titolo);
    setsottotitolo(Options[index].sottotitolo);
    setIndexSel(index);
  }
  return (
    <Card className={clsx(classes.root, className)}>
      <div className={classes.cardMediaWrap}>
        <Avatar
          alt={user.nomeEsteso}
          src={user.avatar.grande}
          sx={{
            width: 250,
            height: 250,
            zIndex: 11,
            position: 'relative',
            transform: 'translateY(-50%)'
          }}
        />
      </div>
      <Typography variant="body1" align="center" sx={{ mt: 10 }}>
        {titolo}
      </Typography>
      <Typography
        variant="h3"
        align="center"
        sx={{ color: 'text.secondary' }}
      >
        {sottotitolo}
      </Typography>

      <Grid container spacing={2} sx={{ my: 5 }}>
        {Options.map((item, index) => (
          <Grid item md={2}>
            <Box sx={{ ml: 3, textAlign: 'center' }} >
              <Grid item md={12}>
                {
                  indexSel === index ? <Icon icon={iconLine} color='green' />
                    : <>&#160;</>
                }
              </Grid>
              <Grid item md={12}>
                <Icon icon={item.icon} width={40} onMouseEnter={() => onHover(index)} color={indexSel === index ? 'green' : ''} />
              </Grid>
            </Box >
          </Grid>
        ))}
      </Grid>


    </Card>
  );
}

export default UserItem;

