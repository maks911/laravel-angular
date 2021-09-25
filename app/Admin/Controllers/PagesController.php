<?php

namespace App\Admin\Controllers;

use App\Pages;
use App\User;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

/**
 *
 */
class PagesController extends AdminController
{
    /**
     * @var string
     */
    protected $title ='Pages';

    protected function grid()
    {
        $grid = new Grid(new Pages());

        $grid->column('id', __('Id'));
        $grid->column('url', __('Url'));
        $grid->column('title', __('Title'));
        $grid->column('user_id', __('user_id'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

        return $grid;
    }

    /**
     * @param $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Pages::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('url', __('Url'));
        $show->field('title', __('Title'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        //relations
        $show->user(__('User'), function($user) {
            $user->id();
            $user->name();
        });
        $show->meta(__('Meta'), function($meta) {
            $meta->metakey();
            $meta->metavalue();
        });

        return $show;
    }

    /**
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Pages());

        $form->tab(__('Basic info'), function ($form) {

            $form->textarea('url', __('Url'));
            $form->textarea('title', __('Title'));
            $form->select('user_id')->options(function ($id) {
                $this->getUser($id);
            });

        })->tab(__('Meta Fields'), function ($form) {

            $form->hasMany('meta', function ($form) {
                $form->text('metakey');
                $form->textarea('metavalue');
                $form->textarea('metatype');
            });

        });

        return $form;
    }

    private function getUser($id)
    {
        $user = User::find($id);

        if ($user) {
            return [$user->id => $user->name];
        }

        return 0;
    }
}
