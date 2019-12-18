import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import './Presentation.scss'

const PresentationView = ({ translations }) => (
  <Grid container className="pr-12 pl-12">
    <Grid item xs={12} md={6} className="flex justify-center">
      <Grid xs={12} lg={12} container item className="pl-0">
        <Grid xs={12} md={12} item className="mb-6">
          <Typography variant="h5" className="title text-center font-black mt-6">
            {translations.titlePage}
          </Typography>
        </Grid>
          <Grid xs={12} md={12} lg={12} item className="pr-6 mb-6 text-presentation">
            <p>Mon institut Le Petit Salon, je l’ai voulu chaleureux, cosy mais aussi toujours avant gardiste. En recherche permanente de marques qui se démarquent vous trouverez au Petit Salon les emblématiques et luxueux soins Matis, le très confidentiel maquillage PAUL & JOE, mais aussi les jolies petites marques de bijoux Grizzly Cheri et Margote Ceramiste.               Pour estomper les effets du temps, j’ai décidé de faire confiance à la technologie innovante et performante de l’Electrolift Plus classique , je fais confiance à LPG pour affiner votre silhouette et vous sculpter un corps de déesse.
            Vous souhaitez en savoir plus sur les différentes prestations de l’institut, n’hésitez pas à venir à notre rencontre, Jessica et moi seront ravies de vous conseiller et de vous faire partager notre passion et notre expertise beauté.
            Magalie</p>
          </Grid>
        </Grid>
      </Grid>
    <Grid xs={12} md={6} item className="">
      <img src={require('../../../assets/images/body_1.jpg')} alt="body_1"/>
    </Grid>
    <Grid container className="flex flex-row-reverse">
    <Grid item xs={12} md={6} lg={6} className="flex justify-center">
      <Grid xs={12} lg={12} container item className="flex items-center">
        <Grid xs={12} lg={12} item className="mt-6">
          <Typography variant="h5" className="text-center font-black">
            {translations.titleSite}
          </Typography>
        </Grid>
          <Grid xs={12} md={12} lg={12} item className="text-presentation mt-12 mb-12 pl-6">
            <p>Mon institut Le Petit Salon, je l’ai voulu chaleureux, cosy mais aussi toujours avant gardiste. En recherche permanente de marques qui se démarquent vous trouverez au Petit Salon les emblématiques et luxueux soins Matis, le très confidentiel maquillage PAUL & JOE, mais aussi les jolies petites marques de bijoux Grizzly Cheri et Margote Ceramiste.               Pour estomper les effets du temps, j’ai décidé de faire confiance à la technologie innovante et performante de l’Electrolift Plus classique , je fais confiance à LPG pour affiner votre silhouette et vous sculpter un corps de déesse.
            Vous souhaitez en savoir plus sur les différentes prestations de l’institut, n’hésitez pas à venir à notre rencontre, Jessica et moi seront ravies de vous conseiller et de vous faire partager notre passion et notre expertise beauté.
            Magalie</p>
          </Grid>
        </Grid>
      </Grid>
    <Grid xs={12} md={6} item className="">
      <img src={require('../../../assets/images/body_2.jpg')} alt="body_2"/>
    </Grid>
    <Grid lg={12} container className="flex justify-around" >
    <Grid lg={2} container item className="flex mt-6">
      <Grid md={12} lg={12} item className="">
        <img src={require('../../../assets/images/face_1.jpg')} alt="face_1"/>
        <Grid lg={12} item className="mt-6">
          <Typography variant="h5" className="text-center font-black">
            {translations.titleAccount}
          </Typography>
        </Grid>
          <Grid  md={12} lg={12} item className="mt-12 mb-12">
            <p>on institut Le Petit Salon, je l’ai voulu chaleureux, cosy mais aussi toujours avant gardiste. En recherche permanente de marques qui se démarquent vous trouverez au Petit Salon les emblématiques et luxueux soins Matis, le très confidentiel maquillage PAUL & JOE, mais aussi les jolies petites marques de bijoux Grizzly Cheri et Margote Ceramiste.               Pour estomper les effets du temps, j’ai décidé de faire confiance à la technologie innovante et performante de l’Electrolift Plus classique , je fais confiance à LPG pour affiner votre silhouette et vous sculpter un corps de déesse.
            Vous souhaitez en savoir plus sur les différentes prestations de l’institut, n’hésitez pas à venir à notre rencontre, Jessica et moi seront ravies de vous conseiller et de vous faire partager notre passion et notre expertise beauté.
            Magalie</p>
          </Grid>
          </Grid>
          </Grid>
            <Grid lg={2} container item className="mt-6">
      <Grid md={12} lg={12} item className="">
        <img src={require('../../../assets/images/body_3.jpg')} alt="body_3"/>
        <Grid lg={12} item className="mt-6">
          <Typography variant="h5" className="text-center font-black">
            {translations.titleActualities}
          </Typography>
        </Grid>
          <Grid  md={12} lg={12} item className="mt-12 mb-12 ">
            <p>on institut Le Petit Salon, je l’ai voulu chaleureux, cosy mais aussi toujours avant gardiste. En recherche permanente de marques qui se démarquent vous trouverez au Petit Salon les emblématiques et luxueux soins Matis, le très confidentiel maquillage PAUL & JOE, mais aussi les jolies petites marques de bijoux Grizzly Cheri et Margote Ceramiste.               Pour estomper les effets du temps, j’ai décidé de faire confiance à la technologie innovante et performante de l’Electrolift Plus classique , je fais confiance à LPG pour affiner votre silhouette et vous sculpter un corps de déesse.
            Vous souhaitez en savoir plus sur les différentes prestations de l’institut, n’hésitez pas à venir à notre rencontre, Jessica et moi seront ravies de vous conseiller et de vous faire partager notre passion et notre expertise beauté.
            Magalie</p>
          </Grid>
          </Grid>
          </Grid>

    <Grid lg={2} container item className="mt-6">
      <Grid md={12} lg={12} item className="">
        <img src={require('../../../assets/images/face_2.jpg')} alt="face_2"/>
        <Grid lg={12} item className="mt-6">
          <Typography variant="h5" className="text-center font-black">
            {translations.titlePrestations}
          </Typography>
        </Grid>
          <Grid  md={12} lg={12} item className="mt-12 mb-12 pl-6">
            <p>on institut Le Petit Salon, je l’ai voulu chaleureux, cosy mais aussi toujours avant gardiste. En recherche permanente de marques qui se démarquent vous trouverez au Petit Salon les emblématiques et luxueux soins Matis, le très confidentiel maquillage PAUL & JOE, mais aussi les jolies petites marques de bijoux Grizzly Cheri et Margote Ceramiste.               Pour estomper les effets du temps, j’ai décidé de faire confiance à la technologie innovante et performante de l’Electrolift Plus classique , je fais confiance à LPG pour affiner votre silhouette et vous sculpter un corps de déesse.
            Vous souhaitez en savoir plus sur les différentes prestations de l’institut, n’hésitez pas à venir à notre rencontre, Jessica et moi seront ravies de vous conseiller et de vous faire partager notre passion et notre expertise beauté.
            Magalie</p>
          </Grid>
          </Grid>
          </Grid>

    <Grid lg={2} container item className="mt-6">
      <Grid md={12} lg={12} item className="">
        <img src={require('../../../assets/images/face_3.jpg')} alt="face_3"/>
        <Grid lg={12} item className="mt-6">
          <Typography variant="h5" className="text-center font-black">
            {translations.titleGallery}
          </Typography>
        </Grid>
          <Grid  md={12} lg={12} item className="mt-12 mb-12 pl-6">
            <p>on institut Le Petit Salon, je l’ai voulu chaleureux, cosy mais aussi toujours avant gardiste. En recherche permanente de marques qui se démarquent vous trouverez au Petit Salon les emblématiques et luxueux soins Matis, le très confidentiel maquillage PAUL & JOE, mais aussi les jolies petites marques de bijoux Grizzly Cheri et Margote Ceramiste.               Pour estomper les effets du temps, j’ai décidé de faire confiance à la technologie innovante et performante de l’Electrolift Plus classique , je fais confiance à LPG pour affiner votre silhouette et vous sculpter un corps de déesse.
            Vous souhaitez en savoir plus sur les différentes prestations de l’institut, n’hésitez pas à venir à notre rencontre, Jessica et moi seront ravies de vous conseiller et de vous faire partager notre passion et notre expertise beauté.
            Magalie</p>
          </Grid>
          </Grid>
          </Grid>

    <Grid lg={2} container item className="mt-6">
      <Grid md={12} lg={12} item className="">
        <img src={require('../../../assets/images/face_4.jpg')} alt="face_4"/>
        <Grid lg={12} item className="mt-6">
          <Typography variant="h5" className="text-center font-black">
            {translations.titleBeautyTips}
          </Typography>
        </Grid>
          <Grid  md={12} lg={12} item className="mt-12 mb-12 pl-6">
            <p>on institut Le Petit Salon, je l’ai voulu chaleureux, cosy mais aussi toujours avant gardiste. En recherche permanente de marques qui se démarquent vous trouverez au Petit Salon les emblématiques et luxueux soins Matis, le très confidentiel maquillage PAUL & JOE, mais aussi les jolies petites marques de bijoux Grizzly Cheri et Margote Ceramiste.               Pour estomper les effets du temps, j’ai décidé de faire confiance à la technologie innovante et performante de l’Electrolift Plus classique , je fais confiance à LPG pour affiner votre silhouette et vous sculpter un corps de déesse.
            Vous souhaitez en savoir plus sur les différentes prestations de l’institut, n’hésitez pas à venir à notre rencontre, Jessica et moi seront ravies de vous conseiller et de vous faire partager notre passion et notre expertise beauté.
            Magalie</p>
          </Grid>
          </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} container className="flex justify-center">
        <Grid xs={12}container item className="flex justify-center mb-6">
          <Typography variant="h5" className="title text-center font-black mt-6">
            {translations.title}
          </Typography>
        </Grid>
          <Grid xs={12} container item className="flex">
          <Grid  xs={12} lg={6} item className="p-6 pb-24 text-center address">
          <i class="fas fa-info-circle text-5xl mb-6"></i>
            <h1 className="font-bold mb-6 uppercase">{translations.infoTips}</h1>
              <p></p>
              <p>58 avenue des champs élysées 75008 Paris</p>
              <p>Tel : 04.01.02.03.04  / 06.01.02.03.04</p>
              </Grid>
              <Grid xs={12} lg={6} item className="text-center p-6 appointment">
              <i class="fas fa-clock text-5xl mb-6"></i>
              <h1 className="font-bold mb-6 uppercase">{translations.schedule}</h1>
              <p>{translations.monday}</p>
              <p>{translations.tuesday}</p>
              <p>{translations.wednesday}</p>
              <p>{translations.thursday}</p>
              <p>{translations.friday}</p>
              <p>{translations.saturday}</p>
              <p>{translations.sunday}</p>
          </Grid>
          </Grid>
          <Grid xs={12} item className="mt-12">
          <img src={require('../../../assets/images/map.jpg')} alt="map"/>

          </Grid>
        </Grid>

  </Grid>
  </Grid>
);

export default PresentationView;
