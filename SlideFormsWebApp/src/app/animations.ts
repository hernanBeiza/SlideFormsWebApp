import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

/*
export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [

    query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),

    group([  
      // block executes in parallel
      query(':enter', [style({ transform: 'translateX(100%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [style({ transform: 'translateX(0%)' }),animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
])
*/
export const routeTransitionAnimations = trigger('routerTransition', [
  transition('Uno => Dos, Dos => Tres', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ right: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ right: '100%', opacity: 0 }))]),
      query(':enter', [animate('500ms ease-out', style({ right: '0%', opacity: 1 }))])
    ]),
    query(':enter', animateChild())
  ]),
  transition('Tres => Dos, Dos => Uno', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('500ms ease-out', style({ left: '100%', opacity: 0 }))]),
      query(':enter', [animate('500ms ease-out', style({ left: '0%', opacity: 1 }))])
     ]),
     query(':enter', animateChild())
   ])
]);