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
            <p>Mon institut Beautyfool, est un endroit chaleureux, cosy mais aussi toujours avant gardiste. En recherche permanente de marques qui se démarquent vous trouverez au Petit Salon les emblématiques et luxueux soins Matis, le très confidentiel maquillage PAUL & JOE, mais aussi les jolies petites marques de bijoux Grizzly Cheri et Margote Ceramiste.               Pour estomper les effets du temps, nous avons décidé de faire confiance à la technologie innovante et performante de l’Electrolift Plus classique , nous fesons confiance à LPG pour affiner votre silhouette et vous sculpter un corps de déesse.
            Vous souhaitez en savoir plus sur les différentes prestations de l’institut, n’hésitez pas à venir à notre rencontre, Carine et lydia seront ravies de vous conseiller et de vous faire partager notre passion et notre expertise beauté.
            Cynthia</p>
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
            <p>Notre site web a était créer pour éviter le déplacement de notre chère clientelle pour prendre des rendez-vous, pour parler a une experte en esthetique via la chatbox et de vous informez sur tous ce qui se passe dans votre lieu de bien être tous nos soins sont réservable directement en vous connectant sur votre profile et en cliquant sur les prestations que vous désirez réserver. Votre profile peux contenir des points fidélité qui vous seront attribué aprés chaque prestations qui sera réaliser, plus le soin est long, plus vous gagnerez de point de fidélité. Le site sera en constante évolutions, nous allons rajouter pleins de nouvelles fonctionnalitées pour arranger les beautyfooler (Fan de l'institut beautyfool). Nous espérons que celui-ci vous plaira. Bonne naviguation !</p>
          </Grid>
        </Grid>
      </Grid>
    <Grid xs={12} md={6} item className="">
      <img src={require('../../../assets/images/body_2.jpg')} alt="body_2"/>
    </Grid>
    <Grid lg={12} container item className="flex justify-around" >
    <Grid lg={2} container item className="flex mt-6">
      <Grid md={12} lg={12} item className="">
        <img src={require('../../../assets/images/face_1.jpg')} alt="face_1"/>
        <Grid lg={12} item className="mt-6">
          <Typography variant="h5" className="text-center font-black">
            {translations.titleAccount}
          </Typography>
        </Grid>
          <Grid  md={12} lg={12} item className="mt-12 mb-12">
            <p>Votre compte est votre espace personnel ou vous retrouverez toutes les informations vous concernant et même vos points fidélité, vos rendez-vous et le bouton pour pouvoir modifier celles-ci</p>
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
            <p>Vous pouvez accéder aux actualités de votre institut pour savoir ce qu'il se passe dans celui-ci il peut y avoir des ateliers pour prendez soin de vous, des réductions, des promotions et même être au courrant s'il y'a un problème et que le salon n'est pas ouvert</p>
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
            <p>Un moment de bien être cela vous interesserez ? venez dans la page prestations pour toutes les voirs puis faire votre choix et venir nous rendre visite ! de la tête au pied, nous saurrons répondre a toutes vos attentes en terme de beauté, on vous attend !</p>
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
            <p>Vous désirez voir l'institut, quelques prestations et photo de beauté ? c'est par ici ! Une galerie avec beaucoup d'image qui vous donneront surement envie de vous faire une petite beauté ou pourquoi pas plusieurs ? </p>
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
            <p>Allez Allez ! on sort la trousse à maquillage ! ici c'est toutes vos astuces beauté pour faire de vous des femmes fatal. Nous ne vendons rien sur cette page nous voulons juste montrer a nos clients comment se servir des soins pour pouvoir en profiter pleinement. A vos Rimmel !</p>
          </Grid>
          </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item container className="flex justify-center">
        <Grid xs={12} container item className="flex justify-center mb-6">
          <Typography variant="h5" className="title text-center font-black mt-6">
            {translations.title}
          </Typography>
        </Grid>
          <Grid xs={12} container item className="flex">
          <Grid  xs={12} lg={6} item className="p-6 pb-24 text-center address">
          <i className="fas fa-info-circle text-5xl mb-6"></i>
            <h1 className="font-bold mb-6 uppercase">{translations.infoTips}</h1>
              <p></p>
              <p>58 avenue des champs élysées 75008 Paris</p>
              <p>Tel : 04.01.02.03.04  / 06.01.02.03.04</p>
              </Grid>
              <Grid xs={12} lg={6} item className="text-center p-6 appointment">
              <i className="fas fa-clock text-5xl mb-6"></i>
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
